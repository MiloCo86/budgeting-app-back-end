const express = require('express')

//controller will be here.
const transactionsController = require("./controllers/transactionsController")


//instance of the server
const app = express()

const cors = require('cors')

//Middleware
app.use(cors())

app.use(express.json())

// routes

app.use('/transactions', transactionsController)

// home route
app.get('/',(req, res) =>{
    res.send ('Welcome to the Transactions Back End App')
})

// Caught everything else.
app.get('*', (req, res) =>{
    res.status(404).json({error: "404 Page Not Found"})
})




module.exports = app