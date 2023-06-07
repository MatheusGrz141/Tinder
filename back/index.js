const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const userRouter = require("./controllers/user.controller");

async function funcao(){
    
    
    
    mongoose.connect('mongodb://127.0.0.1:27017/tinder', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conectado ao MongoDB');
})
.catch((err) => {
    console.error('Erro ao conectar ao MongoDB', err);
});

const app = express();

app.use(express.static('.'))

app.use(express.json());

app.use(cors()); 


app.use("/users", userRouter);


app.listen(3000,()=>{
    console.log("Servidor Rodando");
})




}
funcao()