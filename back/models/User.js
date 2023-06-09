const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:String,
    firstName: String,
    lastName:String,
    birthday:Date,
    avatar:String,
    dateNow:{ type: Date, default: Date.now },
    
})
const User =  mongoose.model("User" ,userSchema)


module.exports = User;