const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
        
   
    topimg:{type:String},
   
    image:{type:String},
    himage:{type:String},
    title:{type:String},

  category:{type:String},
  price:{type:Number},
  strikeprice:{type:String},
  rating:{type:String},
  })

  const productModel=mongoose.model("product",productSchema)

  module.exports={
    productModel
  }