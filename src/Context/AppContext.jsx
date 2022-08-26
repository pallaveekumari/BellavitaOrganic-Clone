 import React, { createContext, useState } from 'react'

export const AppContext=createContext()
const AppContextProvider = ({children}) => {

const [signup,setsignup]=useState([])


const[isAuth,setisAuth]=useState(false)
const [userData,setuserData]=useState([])

const [cartdata,setcartdata]=useState([])

const [qty,setqty]=useState(1)
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
    return el.id != id;
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

  return (
    <AppContext.Provider
     value=
     {{handleAddsign,
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
     handleDecqty

     }}
     >
      {children}
    </AppContext.Provider>
  )
}
 export default AppContextProvider

