const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const cookie_parser = require('cookie-parser') 
const app = express()
const port = 5000


//Middleware for telling express to accept the data in jason form(Has to be defined before routing otherwise it won't work)
app.use(express.json())
app.use(cookie_parser())

//Middleware connection for router file
app.use(require('./router/route'))

//require fileupload for cloudinary
// const fileupload = require('express-fileupload')

//env file contains the database link
dotenv.config({path:'./config.env'})

//connection with file that contains connection with database
require('./db/conn')

//import routes
// require('./router/route')

// app.use(fileupload({
//     useTempFiles:true
// }))

app.use(
    express.urlencoded({ extended: true })
);

const Middleware = (req,res,next)=>{
    console.log("Middleware is working")
    next()
}

app.get('/', (req,res)=>{
    res.send("This is the home page")
})
app.get('/about',Middleware,(req,res)=>{
    res.send("This is the about page")
})
app.get('/contact',(req,res)=>{
    res.send("This is the contact page")
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})