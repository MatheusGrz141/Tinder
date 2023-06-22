const express = require("express");
const jwt = require("jsonwebtoken");
const sha256 = require("crypto-js/sha256")
const Base64 =require("crypto-js/enc-base64") 
const User = require("../models/User") 
const userRouter = express.Router({mergeParams: true});
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });
const mongoose = require("mongoose")
const secret = "74awasd5678u@#RY58375nef";
const authMiddleWare = require("../middleware/auth");

userRouter.put("/update-account" , authMiddleWare, async(req,res)=>{
   console.log("req.body ",req.body)
   console.log("req.body.iAm ",req.body.iAm)
        if(req.body.iAm){
            req.userLogado.iAm = req.body.iAm; 
            console.log("ima salvo")   
        }          
        if(req.body.interests ){
            req.userLogado.interests  = req.body.interests 
            console.log("interess salvo") 
        }     
        req.userLogado.save().then(()=>{
            console.log("Informações salvas corretamente")
        }).catch(()=>{
            res.status(401).send({error: "Erro ao salvar informações "});
        })
        
        return  res.send(true);

})
userRouter.post("/sign-up", upload.single("avatar")  , async (req,res)=>{
    
    let avatar = `http://localhost:3000/${req.file.path}`;
    let password = Base64.stringify(sha256(req.body.password));
    
    new mongoose.model('User')({ 
        avatar:avatar,
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        birthday:req.body.birthday,
        password : password  ,
    }).save().then((user)=>{
        
        
        const token = jwt.sign({  
            email: user.email, 
            id: user._id
        }, secret); 
        
        return res.send({token: token ,avatar:user.avatar ,firstName:user.firstName, lastName:user.lastName});
    }).catch(()=>{
        
        res.status(401).send({error: "Email ou senha inválido "});
    });  
})
userRouter.post("/sign-in", async (req, res) => {
    
    password = Base64.stringify(sha256(req.body.password))
    
    let user =  await User.findOne({email:req.body.email,  password:password})
    
    if(user){
        
        const token = jwt.sign({  
            email: user.email, 
            id: user._id
        }, secret)
        return res.send({token: token});
    }else{
        return res.send(false) 
    }
})  
userRouter.post("/find-account",async (req,res)=>{
    
    let {email} = req.body
    
    let emailAchado= await User.findOne({ email })
    
    
    if (emailAchado) {
        let user =   {avatar: emailAchado.avatar ,firstName: emailAchado.firstName , lastName:emailAchado.lastName}
        return  res.send(user);
    } else {
        
        return res.send(false)
        
    }
})
userRouter.delete("/delete-account", authMiddleWare , async (req,res)=>{
    
    req.userLogado.deleteOne()
    return  res.send(true);
    
})
userRouter.post("/get-accounts" , authMiddleWare ,async(req,res)=>{
    
    
    let userInterests  = req.userLogado.interests;
    
    
    let UsersComMesmosInteresses = [] 
    let users =[]
    UsersComMesmosInteresses= await User.find({interests:{$in :userInterests}})
    UsersComMesmosInteresses.forEach((user)=>{
        if (req.userLogado.id != user._id /* && Date.now()>= data */){
            users.push({
                id:user._id, 
                firstName:user.firstName,
                lastName:user.lastName,
                avatar:user.avatar 
            })
            
            
            req.userLogado.mycross.forEach((cross)=>{
                
                cross.id.includes( user => cross.id === user._id)
                
                if(user){
                    users.pop(user)
                    
                    
                }else{
                    console.log("entrou no else")
                }
            })
        }
    })
    return res.send(users)
})
userRouter.post("/match", authMiddleWare ,async(req,res)=>{
    
    
    
    let userAchado = req.userLogado
    
    if(userAchado){
        
        let id =  req.body.id;
        
        let user = userAchado.mymatchs.find(match =>match==id)
        
        
        if (!user && payloadDoToken.id != id){
            userAchado.mymatchs.push(id)
            userAchado.save() 
            
            return  res.send(true)  
            
        }else{
            
            return  res.send(false) 
            
        }
        
        
    }else{
        
        return  res.send(false) 
        
    }
    
})
userRouter.post("/matchs", authMiddleWare, async (req, res) => {
    const payloadDoToken = jwt.verify(req.headers.token, secret);
    
    
    const users = [];
    const mymatchs  = await User.find({});
    for (const match of mymatchs) {
        
        const deuMatch = match.mymatchs.includes(payloadDoToken.id);
        
        if (deuMatch) {
            
            users.push({
                match
                
            });
        }
    }
    
    return res.send(users);
});
userRouter.post("/cross" ,authMiddleWare ,async (req,res)=>{
    let idCross = req.body.id
    let userAchado = req.userLogado
    userAchado.mycross.push({id:idCross , dateCross:Date.now()})
    userAchado.save().then(()=>{   
        return res.send(true)
    })
    
})
userRouter.delete("/remove-match", authMiddleWare, async (req,res)=>{
    let {id } = req.body
    await User.findById(id).then((user)=>{
        if(user.mymatchs.includes(req.userLogado.id))  {
            
            let newMymatchs = user.mymatchs.filter(value => value != req.userLogado.id)
            user.mymatchs = newMymatchs;
            user.save().then(()=>{
                console.log("salvou certo")
            })
        }
    }).catch((err)=>{
        console.log("Não achamo o cabra " ,err)
    }) 
})
module.exports = userRouter;
