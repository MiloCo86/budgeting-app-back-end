const express = require('express')

// to generate randomid
const { nanoid } = require("nanoid");

//import data
const transactionsArray = require('../models/transactions')

//import validations
const {checkInput} = require('../validations/transactionsValidations')

//instance of transactions
const transactions = express.Router()


// /transactions
transactions.get('/', (req, res) => {
    res.json(transactionsArray)
})

//route to get a unique transaction
transactions.get('/:idx', (req,res) =>{
    const { idx } = req.params;
    if(transactionsArray[idx]){
        res.status(200).json(transactionsArray[idx]);
    }else{
        res.status(400).json({ error: "Transaction Not Found" })
    }
})

//POST Route
transactions.post('/',checkInput,(req,res) =>{
    const newTransaction = req.body
    newTransaction.id = nanoid(5)
    transactionsArray.push(newTransaction)
    res.json(transactionsArray[transactionsArray.length-1])
})

// PUT route
transactions.put("/:idx",checkInput,(req, res) => {
    const { idx } = req.params
    const id = transactionsArray[idx].id
    const updatedTransaction = req.body
    updatedTransaction.id= id
    transactionsArray[idx] = updatedTransaction
    res.status(200).json(transactionsArray[idx])
})

transactions.delete('/:idx', (req,res)=>{
    const { idx } = req.params;
    if(transactionsArray[idx]){
        const deletedTransaction = transactionsArray.splice(idx,1)
        res.json(deletedTransaction)
    }else{
        res.status(404).json({error: "Transaction Not Found"})
    }
    
})

module.exports = transactions