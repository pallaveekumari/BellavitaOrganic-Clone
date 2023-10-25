import React, { useContext, useState } from 'react'
import style from "../Styles/Signup.module.css"
import {Heading,Box} from "@chakra-ui/react"
// import { useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const initial = {
  email:"",
  password:"",
  firstname:"",
  lastname:""
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
      <Navbar/>

      <Box className={style.logos}>
        <Box className={style.logobox}>
        <img className={style.logoimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BV0_500_x_500_V3_480x.png?v=1653046371" alt="" />
       </Box>
       <Box className={style.logobox}>
        <img className={style.logoimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_500_x_500_V3_480x.png?v=1653046388" alt="" />
        </Box>
        <Box className={style.logobox}>
        <img className={style.logoimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721" alt="" />
        </Box>
        </Box>



      <Heading fontWeight="medium" fontSize="50px" fontFamily="Segoi-ui">Create account</Heading>
      <Box className={style.fname}>
        <input className={style.name} name="firstname" type="text" placeholder='First Name' onChange={handleChange}/>
      </Box >
      <Box className={style.lname}>
        <input className={style.name}  name="lastname" type="text" placeholder='Last Name' onChange={handleChange}/>
      </Box>
      <Box className={style.lname}>
        <input  className={style.name} name="email" type="email" placeholder='Email' onChange={handleChange}/>
      </Box>
      <Box className={style.lname}>
        <input  className={style.name}  name="password" type="password" placeholder='Password' onChange={handleChange}/>
      </Box>
      <Box 
      
      >
        <button className={style.signbtn} onClick={async() => {
        let res=await handleAddsign(signData);
        if(res.status){

          alert(res.msg)
         //  handleclear()
           navigate("/login");
        }
        else{
          alert(res.msg)
        }
      }}>Create</button>
    </Box>

    <Footer/>
    </div>
  )
}

export default Signup
