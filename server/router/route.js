const express = require('express')
//requiring bcrypt
const bcrypt = require('bcrypt')
//creating router
const router = express.Router()
//require jwt
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate')
// const cloudinary = require('cloudinary').v2

// cloudinary.config({
//     cloud_name: 'dn2ljrxzy',
//     api_key: '538893749191348',
//     api_secret: 'l_ybVkuWvpLZwffIRiSPJVWQw1Y'
// })

//require the connection file in this file so the data filled in postman can be stored to cluster
require('../db/conn')
const Schema = require('../model/signUpSchema')
const { validate } = require('../model/signUpSchema')
// const addRecipeSchema = require('../model/addrecipeSchema')

router.get('/', (req,res)=>{
    res.send("This is routers home page")
})

router.get('/contact' , (req,res)=>{
    //res.cookie("token" , "Farhan")
    res.send('This is the contact page')
})

router.post('/register',(req,res)=>{

    //array destructuring
    const {name , surname , email , password , cpassword }= req.body

    if(!name || !surname || !email || !password || !cpassword){
        return res.status(422).json({error: "Please fill all the field"})
    }

    Schema.findOne({email:email})
    .then((userExits)=>{
        if(userExits){
            return res.status(422).json({error:"Please fill the field properly"})
        }else if(password != cpassword){
            return res.status(422).json({error:"Please fill the correct password"})
        }else{
            const testuser = new Schema({name , surname , email , password , cpassword})
        //hashing of password
        testuser.save().then(()=>{
            res.status(201).json({message:"You have registered successfully"})
        }).catch((err)=>{res.status(500).json({message:"Please save again"})})
        }
    }).catch((err)=>{console.log(err)})

    // res.json({message: req.body})
})

router.post('/signin' , async (req,res)=>{
    //Array destructure
    const {email , password} = req.body

    const validateemail = await Schema.findOne({email:email})
    //new
    if(validateemail){
        const validatepassword = await bcrypt.compare(password, validateemail.password)

        if(!validatepassword){
            res.status(400).json({error:"Invalid credentials"})
        }else{ 
            const token = await validateemail.generateAuthToken()

             res.cookie('token1' , token ,{
             expires : new Date(Date.now()+25892000000),
             httpOnly:true,
         })
         
            return res.json({message:"user sign in successful" , token:token , cookies:req.cookies})
        }
    }else{
        res.status(400).json({error:"Invalid credentials"})
    }


})

router.get('/profile' ,authenticate, (req,res)=>{
    //getting whole user data here
    const {user} = req
    console.log("hello")
    res.json(user)
})

//Page to get users data
router.get('/getuserdata' , authenticate , (req,res)=>{
    const {user} = req
    res.json(user)
})

router.post('/addrecipe' ,authenticate ,async (req,res)=>{
    try{
   //array destructure
console.log("hello from profile")
   const {recipename , serving , readyinMinute , ingredients , methods , steps} = req.body

   //check that all fields are filled
   if(!recipename || !serving || !readyinMinute || !ingredients || !methods || !steps){
    return res.json({error:"Please fill all the field"})
   }

   const validateuserid = await Schema.findOne({_id:req.userid})
   console.log(validateuserid)

   if(validateuserid){
    const addaftervalidate = await validateuserid.getaddrecipeinfo(recipename , serving , readyinMinute , ingredients , methods , steps)
    
    await validateuserid.save() 

    // const file = req.files.recipeimg
    // cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
    //     console.log(result);
    // })

    res.status(201).json({message:"Recipe added successfully"})
   }
}catch(error){
    console.log(error)
}
})

//logout
router.get('/logout' , (req,res)=>{
    //getting whole user data here
    console.log("this is the logout page")
    res.clearCookie('token1',{path:'/'})
    res.send('This is the logout page')
})

module.exports = router