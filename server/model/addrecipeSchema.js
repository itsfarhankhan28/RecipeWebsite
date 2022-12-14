const mongoose = require('mongoose')

const addrecipeSchema = new mongoose.Schema({
    serving:{
        type:Number,
        required:true
    },
    readyinMinute:{
        type:Number,
        required:true
    },
    ingredients:{
        type:String,
        required:true,
    },
    methods:{
        type:String,
        required:true,
    },
    steps:{
        type:String,
        required:true,
    }
})

const addRecipeSchema = mongoose.model('addrecipe' , addrecipeSchema);

module.exports = addRecipeSchema;