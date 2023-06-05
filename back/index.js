const express = require ('express');
const mongoose = require("mongoose")
--disable-web-security
const app = express();


try{

    app.get("/",async(req,res)=>{
        res.send("bacate")  
    })
    app.post('/',async(req,res)=>{
          res.send("bacate")  
    })










    app.listen(3000,()=>{
        console.log("Servidor Rodando");
    }).catch(()=>{
        console.log("erro ao iniciar servidor");
    })

}catch(e){
    console.log("Houve um erro :",e);

}
