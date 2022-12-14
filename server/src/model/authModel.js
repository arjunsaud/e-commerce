const mongoose = require('mongoose');
const Schema=mongoose.Schema

const AuthSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["ADMIN","USER"],
        default:"USER",
        required:true
    }
},{ timestamps: true })

const User=mongoose.model('User',AuthSchema)

module.exports = User;