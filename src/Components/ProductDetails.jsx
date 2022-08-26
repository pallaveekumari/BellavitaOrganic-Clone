import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import style from "../Styles/ProductDetail.module.css"
import {Text} from "@chakra-ui/react"
// const ProductDetails = ({topimg,image,id,category,price,strikeprice,title,rating}) => {
    const ProductDetails = ({el}) => {
        const {handleAddToCart}=useContext(AppContext)
  return (
    <div className={style.box} key={el.id}>
        <div className={style.topimg}>
        <img className={style.top} src={el.topimg} alt="" />
        </div>
        <div className={style.best}>
        <img src={el.image} alt="" />
        </div>
        <h1 className={style.title}>{el.title}</h1>
        <p className={style.category}>{el.category}</p>
        <div className={style.boxes}>
        <h2>{el.price}</h2>
        <Text as="s">{el.strikeprice}</Text>
        <h2>{el.rating}</h2>
        </div>
       <button  onClick={()=>{
        handleAddToCart(el)
     alert("Item added to your cart")
     }} className={style.addbtn}>ADD TO CART</button>
    </div>
  )
}

export default ProductDetails
