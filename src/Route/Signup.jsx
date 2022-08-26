import React, { useContext, useState } from 'react'
import style from "../Styles/Signup.module.css"
import {Heading,Box} from "@chakra-ui/react"
// import { useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const initial = {
  email:"",
  password:"",
  fname:"",
  lname:""
};


const Signup = () => {

  const {handleAddsign} =useContext(AppContext)

 const [signData,setsignData]=useState(initial)
  const navigate=useNavigate()

  
const handleChange=(e)=>{
 
  const {name,value} =e.target;
  setsignData({
  ...signData,
  [name]:value
});
}

// const handleclear=()=>{
//   setsignData("")
// }

console.log(signData)
  return (
    <div>
      <Heading fontWeight="medium" fontSize="50px" fontFamily="Segoi-ui">Create account</Heading>
      <Box className={style.fname}>
        <input className={style.name} name="fname" type="text" placeholder='First Name' onChange={handleChange}/>
      </Box >
      <Box className={style.lname}>
        <input className={style.name}  name="lname" type="text" placeholder='Last Name' onChange={handleChange}/>
      </Box>
      <Box className={style.lname}>
        <input  className={style.name} name="email" type="email" placeholder='Email' onChange={handleChange}/>
      </Box>
      <Box className={style.lname}>
        <input  className={style.name}  name="password" type="password" placeholder='Password' onChange={handleChange}/>
      </Box>
      <Box 
      
      >
        <button className={style.signbtn} onClick={() => {
        handleAddsign(signData);
       alert("Sign Up Successfull")
      //  handleclear()
        navigate("/login");
      }}>Create</button>
    </Box>
    </div>
  )
}

export default Signup
