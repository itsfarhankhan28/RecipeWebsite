const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
//require jwt
const jwt = require('jsonwebtoken')

const registerSchema = new mongoose.Schema({
    name:String,
    surname:String,
    email:String,
    password:String,
    cpassword:String,
    addedrecipe:[{
        recipename:String,
        serving:Number,
        readyinMinute:Number,
        ingredients:String,
        methods:String,
        steps:String,
    }
    ],
    tokens:[
        {token:String}
    ]
})

//hashing the password here
registerSchema.pre('save' , async function(next){
    console.log("Middleware is working")
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password , 12)
        this.cpassword =await bcrypt.hash(this.password , 12)
    }
    next()
})

//generating the token here
registerSchema.methods.generateAuthToken = async function(){
    try{
        const token =await jwt.sign({_id:this._id} , process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        const result = await this.save()
        return token
    }catch(err){
        console.log(err)
    }
}

//adding recipe here
registerSchema.methods.getaddrecipeinfo = async function(recipename , serving , readyinMinute , ingredients , methods , steps){
    try{
        this.addedrecipe = this.addedrecipe.concat({recipename , serving , readyinMinute , ingredients , methods , steps})
        await this.save()
        return this.addedrecipe
    }catch(err){
        console.log(err)
    }
}

const Schema = mongoose.model('testuser' , registerSchema);

module.exports = Schema;