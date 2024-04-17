const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const SupplierModel = require('./models/supplierUsers')
const InfoModel = require('./models/InfoModel')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://senurak306:1097822801255738429@cluster0.yfh1ciw.mongodb.net/")


app.get("/Users" , (req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})




app.get("/getUser/:id" , (req,res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/CreateUser" , (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
    
})

app.put('/updateuser/:id' , (req,res) => {
    const id = req.params.id;
    
    UserModel.findByIdAndUpdate({_id:id},{
        code: req.body.code , 
        name: req.body.name , 
        uprice: req.body.uprice,
        qty: req.body.qty,
        expdate: req.body.expdate
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.delete('/deleteUser/:id' , (req,res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})


app.get("/Suppliers" , (req,res) => {
    SupplierModel.find({})
    .then(suppliers => res.json(suppliers))
    .catch(err => res.json(err))
})




app.get("/getSupplier/:id" , (req,res) => {
    const id = req.params.id;
    SupplierModel.findById({_id:id})
    .then(suppliers => res.json(suppliers))
    .catch(err => res.json(err))

    
})

app.put('/updatesupplier/:id' , (req,res) => {
    const id = req.params.id;
    
    SupplierModel.findByIdAndUpdate({_id: id},{
        sid: req.body.sbid , 
        name: req.body.name , 
        address: req.body.address,
        district: req.body.district,
        email: req.body.email,
        contact: req.body.contact
    })
    .then(suppliers => res.json(suppliers))
    .catch(err => res.json(err))
})

app.post("/createsupplier" , (req,res) => {
    SupplierModel.create(req.body)
    .then(suppliers => res.json(suppliers))
    .catch(err => res.json(err))
    
})




app.delete('/deleteSupplier/:id' , (req,res) => {
    const id = req.params.id;
    SupplierModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})


//Bank 

app.get("/Info" , (req,res) => {
    InfoModel.find({})
    .then(infos => res.json(infos))
    .catch(err => res.json(err))
})



app.get("/getInfo/:id" , (req,res) => {
    const id = req.params.id;
    InfoModel.findById({_id:id})
    .then(infos => res.json(infos))
    .catch(err => res.json(err))

    
})

app.put('/updateInfo/:id' , (req,res) => {
    const id = req.params.id;
    
    InfoModel.findByIdAndUpdate({_id: id},{
        sbid: req.body.sbid , 
        bank: req.body.bank , 
        accno: req.body.accno,
        accname: req.body.accname,
        branch: req.body.branch
    })
    .then(infos => res.json(infos))
    .catch(err => res.json(err))
})

app.post("/createinfo" , (req,res) => {
    InfoModel.create(req.body)
    .then(infos => res.json(infos))
    .catch(err => res.json(err))
    
})



app.delete('/deleteInfo/:id' , (req,res) => {
    const id = req.params.id;
    InfoModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})



app.listen(3001 , () => {
    console.log("Server is running")
})


