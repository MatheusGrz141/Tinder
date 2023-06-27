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
    
    if(req.body.iAm){
        req.userLogado.iAm = req.body.iAm; 
        
    }          
    if(req.body.interests ){
        req.userLogado.interests  = req.body.interests 
        
    }     
    req.userLogado.save().then(()=>{
        
    }).catch(()=>{
        return res.status(401).send({error: "Erro ao salvar informações "});
    })
    
    return  res.send(true);
    
})
userRouter.post("/sign-up", upload.single("avatar")  , async (req,res)=>{
    
    let avatar = `http://localhost:3000/${req.file.path}`;
    let password = Base64.stringify(sha256(req.body.password));
    
    new User({ 
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
        
        return res.status(401).send({error: "Email ou senha inválido "});
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
        
        return res.status(401).send({error: "Erro de acesso informações "});
    }
})  
userRouter.get("/find-account",async (req,res)=>{
    
    let {email} = req.query
    let emailAchado= await User.findOne({ email })
    
    if (emailAchado) {
        let user =   {avatar: emailAchado.avatar ,firstName: emailAchado.firstName , lastName:emailAchado.lastName}
        return  res.send(user);
        
    } else {
        return res.send(false); 
    }
})
userRouter.delete("/delete-account", authMiddleWare , async (req,res)=>{
    req.userLogado.deleteOne().then(()=>{
        return  res.send(true);
    }).catch((err)=>{
        return res.status(401).send({error: "Erro ao deletar usuário ",err});
    })
    
    
})
userRouter.get("/get-accounts" , authMiddleWare ,async(req,res)=>{
    
    let {
        interests ,
        mycross,
        iAm
    } = req.userLogado
    
    let UsersComMesmosInteresses = [] 
    let users =[]
    this.pessoasQueEuDeiCross = []
    if(iAm == 'Man'){  
        UsersComMesmosInteresses= await User.find({iAm: "Woman" , interests:{$in :interests}})
    }else if(iAm == 'Woman'){ 
        UsersComMesmosInteresses= await User.find({iAm: "Man" ,interests:{$in :interests}})
    }else{
        UsersComMesmosInteresses= await User.find({interests:{$in :interests}})
    }   
    
    let dataLimite = new Date();
    dataLimite.setMinutes(dataLimite.getMinutes() - 1);
    
    UsersComMesmosInteresses.forEach((user)=>{ 
        mycross.forEach((cross)=>{
         
            if( cross.id == user._id &&  cross.dateCross >=dataLimite ){
              
                this.pessoasQueEuDeiCross.push(user) 
            }
            
        }) 
       
        if ((req.userLogado.id != user._id)  && (!this.pessoasQueEuDeiCross.includes(user)) ){
            users.push({
                id:user._id, 
                firstName:user.firstName,
                lastName:user.lastName,
                avatar:user.avatar 
            }) 
        }
    })
    return res.send(users)
})
userRouter.post("/match", authMiddleWare ,async(req,res)=>{
    
    let userAchado = req.userLogado
    
    
    let id =  req.query.id
    
    let user = userAchado.mymatchs.find(match =>match==id)
    
    if (!user && userAchado._id != id){
        userAchado.mymatchs.push(id)
        userAchado.save() 
        
        return  res.send(true)    
    }
    return res.send(false)
    
})
userRouter.get("/matchs", authMiddleWare, async (req, res) => {
    
    const users = [];
    
    const mymatchs  = await User.find({});
    
    for (const match of mymatchs) {
        
        const deuMatch = match.mymatchs.includes(req.userLogado._id.toString());
        
        if (deuMatch) {
            
            users.push({
                
                match 
            });
        }
    } 
    
    return res.send(users);
});
userRouter.post("/cross" ,authMiddleWare ,async (req,res)=>{
    req.userLogado.mycross.push({id:req.query.id , dateCross:Date.now()})
    req.userLogado.save().then(()=>{   
        return res.send(true)
    }).catch(()=>{
        return res.status(401).send({err:"erro ao adicionar X"})
    })
})
userRouter.delete("/remove-match", authMiddleWare, async (req,res)=>{
    let {id } = req.body
    await User.findById(id).then((user)=>{
        if(user.mymatchs.includes(req.userLogado.id))  {
            
            let newMymatchs = user.mymatchs.filter(value => value != req.userLogado.id)
            user.mymatchs = newMymatchs;
            user.save().catch((err)=>{
                return res.status(401).send({err:"erro ao adicionar X"})
            }) 
            return res.send(true)
        }
        return res.send(false)
    }).catch((err)=>{
        return res.status(401).send({err:"erro ao adicionar X"})
    }) 
})
module.exports = userRouter;
