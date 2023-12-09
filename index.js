const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ExpenseModel = require('./models/Expenses')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://admin:dbUserPassword@cluster0.nq8i8sx.mongodb.net/?retryWrites=true&w=majority")

app.get('/', (req, res) => {
    ExpenseModel.find({})
    .then(expenses => res.json(expenses))
    .catch(err => res.json(err))
})

app.get('/getExpense/:id', (req, res) => {
    const id = req.params.id;
    ExpenseModel.findById({_id:id}, )
    .then(expenses => res.json(expenses))
    .catch(err => res.json(err))
})

app.put('/updateExpense/:id', (req, res) => {
    const id = req.params.id;   
    ExpenseModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        price:req.body.price})
    .then(expenses => res.json(expenses))
    .catch(err => res.json(err))
})

app.delete('/deleteItem/:id', (req, res) => {
    const id = req.params.id;
    ExpenseModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => console.log(err))
})

app.post("/addToList", (req, res) => {
    ExpenseModel.create(req.body)
    .then(expenses => res.json(expenses))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is running")
})
