const mongoose=require("mongoose")
const Schema=mongoose.Schema

const productSchema=new Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true
    },
    image: {
        type: String,
    },
    // productCategory:{
    //     type:String,
    //     required:true
    // },
    // productModel:{
    //     type:String,
    //     required:true
    // },
    // productRating:{
    //     type:Number,
    //     required:true
    // },
    // productVarient:{
    //     type:String,
    //     required:true
    // },
    // productBrand:{
    //     type:String,
    //     required:true
    // }
},{ timestamps: true })

const Product=mongoose.model('Products',productSchema)

module.exports = Product;