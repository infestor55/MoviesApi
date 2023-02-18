const express = require('express')
const movies = require('./routes/movies')
require("dotenv/config")
const mongoose = require("mongoose")
const app = express()



//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/movies', movies)

// mongoose db conncection
mongoose.connect(process.env.DB_connection, ()=>{
    console.log("Connection to DB established")
})

app.listen(5000, ()=>{
    console.log('Server running on port 5000...')
})