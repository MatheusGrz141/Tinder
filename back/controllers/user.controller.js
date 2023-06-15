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
        if(req.body.password){
            emailAchado.password =   Base64.stringify(sha256(req.body.password)); 
            
        }     
        emailAchado.save().then(()=>{
            
        })
        
        return  res.send(true);
        
    }) 
    
    return
})

userRouter.post("/sign-up", upload.single("avatar")  , async (req,res)=>{
    let avatar = `http://localhost:3000/${req.file.path}`;
    
    new mongoose.model('User')({ 
        avatar:avatar,
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        birthday:req.body.birthday,
        
    }).save().then((user)=>{
        const token = jwt.sign({  
            email: user.email, 
            id: user._id
        }, secret);
        return res.send({token: token ,avatar:avatar});
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
    
    
}
)  


userRouter.post("/find-account",async (req,res)=>{
    
    let {email} = req.body
    
    let emailAchado= await User.findOne({ email })
    console.log("emailAchado "+emailAchado)
    
    if (emailAchado) {
        let user =   {avatar: emailAchado.avatar }
        return  res.send(user);
    } else {
        
        return res.send(false)
        
    }
})
userRouter.delete("/delete-account",async (req,res)=>{
    console.log("entrou no delete account " )
    const payloadDoToken = jwt.verify(req.body.token, secret);
    console.log("payloadDoToken " ,payloadDoToken)
    const userDeletado = await User.findById(payloadDoToken.id); 
    console.log("userDeletado " ,userDeletado)
    if (userDeletado) {
        userDeletado.deleteOne()
        return  res.send(true);
    } else {
        console.log("entrou no else")
        return res.send(false)
        
    }
})

userRouter.post("/get-accounts" ,async(req,res)=>{
    let Users = [] 
    let users =[]
    Users= await User.find({})
    Users.forEach((user)=>{
        
        users.push({ 
            firstName:user.firstName,
            lastName:user.lastName,
            avatar:user.avatar 
        })
    })
    
    return res.send(users)
    
})
module.exports = userRouter;
