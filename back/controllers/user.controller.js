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

userRouter.post("/update-account" , async(req,res)=>{
    
    let token = req.headers.token;
    const payloadDoToken = await jwt.verify(token, secret);
    
    await User.findById(payloadDoToken.id).then((emailAchado) => {
        
        
        if(req.body.iAm){
            emailAchado.iAm = req.body.iAm;   
            
        }          
        if(req.body.interests ){
            emailAchado.interests  = req.body.interests
            
        }     
        emailAchado.save().then(()=>{
            console.log(" salvou certinho")
        })
        
        return  res.send(true);
        
    }) 
    console.log ("deu erro pra achar o cabra")
    return
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
    }).catch((err)=>{
        
        res.status(401).send({error: "Email ou senha inválido"});
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
userRouter.delete("/delete-account",async (req,res)=>{
    
    const payloadDoToken = jwt.verify(req.body.token, secret);
    
    const userDeletado = await User.findById(payloadDoToken.id); 
    
    if (userDeletado) {
        userDeletado.deleteOne()
        return  res.send(true);
    } else {
        
        return res.send(false)
        
    }
})
userRouter.post("/get-accounts" , authMiddleWare ,async(req,res)=>{
    
    const payloadDoToken = jwt.verify(req.headers.token, secret);
    
    const userAchado= await User.findById(payloadDoToken.id);
    
    let userInterests  = userAchado.interests;
    
    
    let Users = [] 
    let users =[]
    Users= await User.find({interests:{$in :userInterests}})
    Users.forEach((user)=>{
        if (payloadDoToken.id != user._id){
            users.push({
                id:user._id, 
                firstName:user.firstName,
                lastName:user.lastName,
                avatar:user.avatar 
            })
            
            
            userAchado.mycross.forEach((cross)=>{
                
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
    
    let token = req.headers.token
    const payloadDoToken = jwt.verify(token, secret);
    
    let userAchado = await User.findById(payloadDoToken.id)
    
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
userRouter.post("/cross" ,async (req,res)=>{
    let idCross = req.body.id
    let {token} = req.headers 
    let achou = false;
    let payloadDoToken = await jwt.verify(token ,secret)
    
    await User.findById(payloadDoToken.id).then((userAchado)=>{
        
        if(!achou){
            userAchado.mycross.push({id:idCross , dateCross:Date.now()})
            userAchado.save().then(()=>{   
                return res.send(true)
            }
            )
        }        
    }).catch((err)=>{
        console.log("Usuario não encontrado ",err)
        return res.send(false)
    })
    
})
userRouter.delete("/remove-match", async (req,res)=>{
    console.log("entrou na rota")
    let {id ,token} = req.body
    console.log("id ",id ," token ",token)
    let payloadDoToken = jwt.verify(token ,secret)
    console.log("payloadDoToken ",payloadDoToken)
    await User.findById(id).then((user)=>{
        
        
        if(user.mymatchs.includes(payloadDoToken.id))  {
            console.log("user.mymatchs ",user.mymatchs )
            let newMymatchs = user.mymatchs.filter(value => value != payloadDoToken.id)
            console.log(newMymatchs)
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
