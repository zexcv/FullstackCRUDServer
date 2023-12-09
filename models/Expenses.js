const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    name: String, 
    price: Number,
})

const ExpenseModel = mongoose.model("expenses", ExpenseSchema)
module.exports = ExpenseModel