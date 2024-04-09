const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://senurak306:1097822801255738429@cluster0.yfh1ciw.mongodb.net/")


app.get("/" , (req,res) => {
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

app.post("/CreateUser" , (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})





app.delete('/deleteUser/:id' , (req,res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001 , () => {
    console.log("Server is running")
})


