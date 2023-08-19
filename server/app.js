require('dotenv').config()
const express = require('express')
const cookie_parser = require('cookie-parser') 
const app = express()
const router = require('./api/route')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(cookie_parser())
app.use('/recipe',router)
require('./db/conn')
app.use(
    express.urlencoded({ extended: true })
);

const Middleware = (req,res,next)=>{
    console.log("Middleware is working")
    next()
}

app.get('/', (req,res)=>{
    res.send("This is the Recipe website backend Created using Node.js,Express.js and MongoDB")
})
app.get('/about',Middleware,(req,res)=>{
    res.send("This is the about page")
})
app.get('/contact',(req,res)=>{
    res.send("This is the contact page")
})

app.listen(process.env.PORT,()=>{
    console.log(`listening to port ${process.env.PORT}`)
})