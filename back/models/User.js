const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    firstName: String,
    lastName:String,
    birthday:String ,
    avatar:String,
    iAm: String,
    dateNow:{ type: String, default: Date.now() },
    interests: {type: [String]},
    
})
const User =  mongoose.model("User" ,userSchema)


module.exports = User;