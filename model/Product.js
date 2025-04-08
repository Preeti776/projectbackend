const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type: Number
    },
    stock:{
        type:Number
    },
    brand:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    }
})

const Product = mongoose.model('Product',ProductSchema);
module.exports = {Product}