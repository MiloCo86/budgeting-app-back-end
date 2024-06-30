const express = require('express')

//importing data

const transactionsArray = require('../models/transactions')

//instance of transactions
const transactions = express.Router()


// /transactions
transactions.get('/', (req, res) => {
    res.json(transactionsArray)
})





module.exports = transactions