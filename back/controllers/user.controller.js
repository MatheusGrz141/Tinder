const express = require("express");
const sha256 = require("crypto-js/sha256")
const Base64 =require("crypto-js/enc-base64") 
const User = require("../models/User") 
const userRouter = express.Router({mergeParams: true});
/* const authMiddleWare = require("../middlewares/auth.middleware"); */
const mongoose = require("mongoose")

userRouter.get("/" , async (req,res)=>{
    
    
    /*    
    const usuarioNovo = mongoose.model('User')
    
    new usuarioNovo({
        firstName: 'as',
        lastName: 'as',
         
    }).save().then(()=>{
        console.log("Salvo com sucesso")  
    }).catch((err)=>{
        console.log("Usuario não salvo " +err)  
    });  
    */
})
userRouter.post("/sign-in" , async (req,res)=>{
    
    console.log("req "+ req)
    let {
        firstName,
        lastName
    } = JSON.stringify((req.body));


    console.log("req.body "+req.body)
    console.log("firstName "+firstName)
    console.log("lastName "+lastName)
    
    User.findOne({firstName , lastName}).then((usuario)=>{
        if(usuario){
            console.log("if")
            console.log(usuario)
            res.send("usuario ja cadastrado")
            
        }else{
            
            console.log(usuario)
            console.log("else")
            res.send("não existe uma conta")
            
        }



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
        
    })  
        
        
        
        
    
    
    
    
    module.exports = userRouter;
    