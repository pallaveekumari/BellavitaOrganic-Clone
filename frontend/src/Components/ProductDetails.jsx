import React, { useContext,useState } from 'react'
import { AppContext } from '../Context/AppContext'
import style from "../Styles/ProductDetail.module.css"
import {Text} from "@chakra-ui/react"
// const ProductDetails = ({topimg,image,id,category,price,strikeprice,title,rating}) => {
    const ProductDetails = ({el}) => {
        const {handleAddToCart}=useContext(AppContext);
        const [hover,setHover] = useState(false);
  return (
    <div className={style.box} key={el.id}>
        <div className={style.topimg}>
        <img className={style.top} src={el.topimg} alt="" />
        </div>
        <div className={style.best}>
        <img onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} src={hover?el.himage: el.image} alt="" />
        </div>
        <h1 className={style.title}>{el.title}</h1>
        <p className={style.category}>{el.category}</p>
        <div className={style.boxes}>
        <h2>RS: {el.price}</h2>
        <Text as="s">{el.strikeprice}</Text>
        <h2>{el.rating}</h2>
        <i style={{marginTop:"5px",marginLeft:"-25px"}}className="fa-solid fa-star"></i>
        </div>
       <button  onClick={async ()=>{
        let payload={...el,qty:1}
        let response=await handleAddToCart(payload)
        console.log('response is ',response)
        alert(response.msg)
     }} className={style.addbtn}>ADD TO CART</button>
    </div>
  )
}

export default ProductDetails
