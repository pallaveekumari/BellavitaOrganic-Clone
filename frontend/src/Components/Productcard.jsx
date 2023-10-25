import React, { useContext, useState } from 'react'
import style from "../Styles/Productcard.module.css"
import {Heading,Text} from "@chakra-ui/react"
import { AppContext } from '../Context/AppContext'

// const Productcard = ({topimg,image,_id,category,price,strikeprice,title}) => {
    const Productcard = ({el}) => {
        const {handleAddToCart}=useContext(AppContext)
        const [hover,setHover] = useState(false);
  return (
    <div className={style.box} key={el._id}>
        
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
        </div>
       <button onClick={()=>
       {
        handleAddToCart(el)
       alert("Item added to your cart")
       }
       } 
       
       className={style.addbtn}>ADD TO CART</button>

    </div>
  )
}

export default Productcard


