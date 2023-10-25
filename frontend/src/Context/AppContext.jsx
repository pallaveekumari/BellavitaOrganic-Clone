 import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
export const AppContext=createContext()
const AppContextProvider = ({children}) => {

const [signup,setsignup]=useState([])


const[isAuth,setisAuth]=useState(false)
const [userData,setuserData]=useState([])

const [cartdata,setcartdata]=useState([])



const [productdata,setproductdata]=useState([])
const [total, setTotal] = useState(0);
const [loading,setLoading]=useState(false)
const handleTotal = () => {
   let totalprice=cartdata.reduce((sum, el) => {
     return sum + (el.price*el.qty);
   }, 0);
  setTotal(totalprice)
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



const handlesearch=(query)=>{
  axios.get(`https://bellavita-organic.herokuapp.com/productpage?q=${query}`)
  .then(res=>setproductdata(res.data))
}

const getProductdata=()=>{
  setLoading(true)
  axios.get(`http://localhost:8000/allproducts`)

  .then(res=>{
    
    setproductdata(res.data.data)
  setLoading(false)
})
  
}



const handlesort=(type)=>{
  if(type==="LTH")
  {
    const updated=productdata.sort((a,b)=>{
      if(a.price>b.price)
      {
        return 1;
      }
      else if(a.price<b.price)
      {
        return -1;
      }
      else
      {
        return 0;
      }
    })
  setproductdata([...updated])
  }
  else
  {
     const updated=productdata.sort((a,b)=>{
      if(a.price>b.price)
      {
        return -1;
      }
      else if(a.price<b.price)
      {
        return 1;
      }
      else
      {
        return 0;
      }
     })
     setproductdata([...updated])
  }
}

const handlesorttitle=(type)=>{
  if(type==="ATZ")
  {
    const updated=productdata.sort((a,b)=>{
      if(a.title>b.title)
      {
        return 1;
      }
      else if(a.title<b.title)
      {
        return -1;
      }
      else
      {
        return 0;
      }
    })
  setproductdata([...updated])
  }
  else
  {
     const updated=productdata.sort((a,b)=>{
      if(a.title>b.title)
      {
        return -1;
      }
      else if(a.title<b.title)
      {
        return 1;
      }
      else
      {
        return 0;
      }
     })
     setproductdata([...updated])
  }
}

const handleqty=(id,amount)=>{
  let updatedData= cartdata.map(el=>{
    if(el.id==id)
    {
        return {
           ...el,
           qty: el.qty+amount
        }
    }
    else{
        return el;
    }
  })
  setcartdata(updatedData)
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
   
     
     handleqty,
     
     handlesearch,
     productdata,
     getProductdata,
     handleTotal,
     total,
     handlesort,
     handlesorttitle,
     handleqty,
     loading
    

     }}
     >
      {children}
    </AppContext.Provider>
  )
}
 export default AppContextProvider

