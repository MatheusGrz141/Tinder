const express = require("express");
const sha256 = require("crypto-js/sha256")
const Base64 =require("crypto-js/enc-base64") 
const User = require("../models/User") 
const userRouter = express.Router({mergeParams: true});
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });

const mongoose = require("mongoose")


userRouter.post("/update-account" , (req,res)=>{
    let {email} = req.body
    
let novoArray = (req.body.interests)
console.log(novoArray)
    User.findOne({email}).then((emailAchado) => {
        if (emailAchado) {
            if(!emailAchado.iAm){
                emailAchado.iAm = req.body.iAm; 
            }
            
            
            if(req.body.interests ){
                emailAchado.interests  = req.body.interests
                console.log("interesse salva com sucesso")
            }
            if(req.body.password){
                emailAchado.password =   Base64.stringify(sha256(req.body.password)); 
                console.log("senha salva com sucesso")
            }
            
            
            emailAchado.save().then(()=>{
                console.log("salvo com sucesso no banco")
            })
           
            return  res.send(true);
        } else{
            console.log("não achemo o cabra")
        }
        return
    }) 
})

userRouter.post("/sign-up", upload.single("avatar")  , async (req,res)=>{
    let avatar = `http://localhost:3000/${req.file.path}`;
    
    
    
    new mongoose.model('User')({ 
        avatar:avatar,
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        birthday:req.body.birthday,
        
        
        
    }).save().then(()=>{
        token = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
        }
        console.log("Salvo com sucesso  ") 
        return res.send({token:token})
    }).catch((err)=>{
        console.log("Usuario não salvo " +err)  
        res.status(401).send({error: "Email ou senha inválido"});
    });  
    
})
userRouter.post("/sign-in", async (req, res) => {
    let { firstName, lastName } = req.body
    
    User.findOne({ firstName, lastName }).then((usuario) => {
        if (usuario) {
            console.log("Usuário já cadastrado");
            
            res.send("");
        } else {
            console.log("usuario nao cadastrado");
            res.send("");
        }
        
    })  
    
    
    
    
    /*  await  User.findOne({firstName})
    .then((userLogado=>{
        if(userLogado){
            console.log("if")
            console.log(userLogado)
            res.send("usuario ja cadastrado")
            
        }else{
            console.log(userLogado)
            console.log("else")
            res.send("não existe uma conta")
            await let user = await User.create({firstName,lastName})
            const token = jwt.sign({
                email: user.firstName, 
                id: user._id
            }, "bacateDoceComBacate"); 
            res.send({token:token})  
        }
    }))*/
    
    
    
    
})  
userRouter.post("/find-account",(req,res)=>{
    
    let {email} = req.body
    
    User.findOne({ email }).then((emailAchado) => {
        if (emailAchado) {
            console.log("Usuário já cadastrado");
            
            return  res.send(true);
        } else {
            console.log("usuario nao cadastrado");
            return res.send(false)
            
        }
        
    }) 
})








module.exports = userRouter;
