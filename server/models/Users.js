const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    code:String,
    name:String,
    uprice:String,
    qty:String,
    expdate:String
})

const UserModel = mongoose.model("users" , UserSchema)
module.exports = UserModel