const jwt = require("jsonwebtoken");
const User = require("../models/User")

const estaLogado = async (req,res,next)=>{
    const token = req.readers.token;
    
    if(!token){
        token 
    }
    try{
        let dadosDOToken = jwt.verify(token , "74awasd5678u[]çRY5=[=8375nef")
        let userLOgado = await User.findById(dadosDOToken.id)
        
    }catch(e){
        return res.status(401).send({error: "Erro de acesso!"});
    }
}

module.exports = estaLogadote