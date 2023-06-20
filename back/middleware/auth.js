const jwt = require('jsonwebtoken')
const secret = "74awasd5678u@#RY58375nef";
const User = require("../models/User");

const authMiddleWare = async (req, res, next) => {

    const token = req.headers.token;

    if(!token){
       
        return res.status(401).send({error: "Erro de acesso!"});
    } 
    try {
        const payloadDoToken = jwt.verify(token, secret);

        const userLogado = await User.findById(payloadDoToken.id);
        if(!userLogado){
           
            return res.status(401).send({error: "Erro de acesso!"});
        }
   
        req.userLogado = userLogado;
        next();
    } catch(e) {
    
        return res.status(401).send({error: "Erro de acesso!"});
    }
}

module.exports = authMiddleWare;