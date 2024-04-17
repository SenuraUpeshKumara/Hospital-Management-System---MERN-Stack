const mongoose = require('mongoose')

const supplierUsersSchema = new mongoose.Schema({
    sid:String,
    name:String,
    address:String,
    district:String,
    email:String,
    contact:String
})


const SupplierModel = mongoose.model("suppliers",supplierUsersSchema)
module.exports = SupplierModel