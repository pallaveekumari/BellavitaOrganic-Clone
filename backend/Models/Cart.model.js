const mongoose=require("mongoose")
const cartSchema=mongoose.Schema({
        
   
    topimg:{type:String},
   
    image:{type:String},
    himage:{type:String},
    title:{type:String},

  category:{type:String},
  price:{type:Number},
  strikeprice:{type:String},
  rating:{type:String},
  qty:{type:Number},
  userId:{type:String}
  })

  const cartModel=mongoose.model("cartdata",cartSchema)

  module.exports={
    cartModel
  }