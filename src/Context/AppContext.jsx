 import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
export const AppContext=createContext()
const AppContextProvider = ({children}) => {

const [signup,setsignup]=useState([])


const[isAuth,setisAuth]=useState(false)
const [userData,setuserData]=useState([])

const [cartdata,setcartdata]=useState([])

const [qty,setqty]=useState(1)

const [productdata,setproductdata]=useState([])
const [total, setTotal] = useState(0);
const handleTotal = (arr) => {
  let updatedTotal =  arr.reduce((sum, el) => {
     return sum + el.price;
   }, 0);
   setTotal(updatedTotal)
 };

const handleAddsign=(signupdata)=>{
   setsignup([...signup,signupdata])
}

const handleUserData=({email}) =>{
  setuserData({
    ...userData,
    email:email
  })
}

const handlelogin=()=>{
  setisAuth(true)
}

const handleAddToCart=(data)=>{
setcartdata([...cartdata,data])
}


const handleDeleteData=(id)=>{
  let updated=cartdata.filter((el)=>{
    return el.id !== id;
  });
  setcartdata(updated)
};

const handleqty=()=>
{
  setqty(qty+1)
}

const handleDecqty=()=>{
  setqty(qty-1)
}

const handlesearch=(query)=>{
  axios.get(`https://bellavita-organic.herokuapp.com/productpage?q=${query}`)
  .then(res=>setproductdata(res.data))
}

const getProductdata=()=>{
  axios.get(`https://bellavita-organic.herokuapp.com/productpage`)
  .then(res=>setproductdata(res.data))
}



  return (
    <AppContext.Provider
     value=
     {{
      handleAddsign,
     signup,
     handleUserData,
     handlelogin,
     isAuth,
     handleAddToCart,
     cartdata,
     handleDeleteData,
     setqty,
     qty,
     handleqty,
     handleDecqty,
     handlesearch,
     productdata,
     getProductdata,
     handleTotal,
     total
    

     }}
     >
      {children}
    </AppContext.Provider>
  )
}
 export default AppContextProvider

