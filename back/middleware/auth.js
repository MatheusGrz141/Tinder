const jwt = require('jsonwebtoken')
const secret = "74awasd5678u@#RY58375nef";
const User = require("../models/User");

const authMiddleWare = async (req, res, next) => {
console.log("entrou no midleware")
    const token = req.headers.token;

    if(!token){
        console.log("num tem token")
        return res.status(401).send({error: "Erro de acesso!"});
    } 
    try {
        const payloadDoToken = jwt.verify(token, secret);

        const userLogado = await User.findById(payloadDoToken.id);
        if(!userLogado){
            console.log("num tem cara no User com essa id")
            return res.status(401).send({error: "Erro de acesso!"});
        }
        console.log("user logado logou")
        req.userLogado = userLogado;
        next();
    } catch(e) {
        console.log("token não foi convertido")
        return res.status(401).send({error: "Erro de acesso!"});
    }
}

module.exports = authMiddleWare;