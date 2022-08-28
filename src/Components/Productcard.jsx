import React, { useContext } from 'react'
import style from "../Styles/Productcard.module.css"
import {Heading,Text} from "@chakra-ui/react"
import { AppContext } from '../Context/AppContext'

// const Productcard = ({topimg,image,id,category,price,strikeprice,title}) => {
    const Productcard = ({el}) => {
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


// key={el.id}
// img={el.topimg}
// image={el.image}
// title={el.title}
// category={el.category}
// price={el.price}
// strikeprice={el.strikeprice}