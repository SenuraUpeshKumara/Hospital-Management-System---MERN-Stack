const mongoose = require('mongoose')

const InfoSchema = new mongoose.Schema({
    sbid:String,
    bank:String,
    accno:String,
    accname:String,
    branch:String
})

const InfoModel = mongoose.model("infos",InfoSchema)

module.exports = InfoModel