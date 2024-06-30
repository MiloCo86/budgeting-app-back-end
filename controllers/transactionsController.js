const express = require('express')

//importing data

const transactionsArray = require('../models/transactions')

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
transactions.post('/',(req,res) =>{
    transactionsArray.push(req.body)
    res.json(transactionsArray[transactionsArray.length-1])
})

// PUT route
transactions.put("/:idx", (req, res) => {
    const { idx } = req.params
    transactionsArray[idx] = req.body
    res.status(200).json(transactionsArray[idx])
})

transactions.delete('/:idx', (req,res)=>{
    const { idx } = req.params;
    if(transactionsArray[idx]){
        const deletedBookmark = transactionsArray.splice(idx,1)
        res.json(transactionsArray[0])
    }else{
        res.status(404).json({error: "Transaction Not Found"})
    }
    
})

module.exports = transactions