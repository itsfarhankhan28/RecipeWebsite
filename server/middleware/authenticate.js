const jwt = require('jsonwebtoken')
const Schema = require('../model/signUpSchema') 

const authenticate = async(req,res,next)=>{
    try{
    //taking the cookie
    const token = req.cookies.token1
    //verify token
    const verifytoken = jwt.verify(token , itisfarhankhanthefullstackwebdeveloper)
    //verify user
    const user = await Schema.findOne({_id:verifytoken._id})

    if(!user){
        throw new Error("User not found")
    }

    req.token = token
    req.user = user
    req.userid = user._id
    console.log(req.userid)
    // res.json(user)
    console.log("hello from middleware")

    next();
    }catch(err) {
        console.log(err)
    }
}

module.exports = authenticate