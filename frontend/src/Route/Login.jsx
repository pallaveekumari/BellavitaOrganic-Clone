import React, { useContext, useState } from 'react'
import style from "../Styles/Login.module.css"
import {Heading,Box} from "@chakra-ui/react"
import { useNavigate,Link } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const init={
  email:"",
  password:""
}

const Login = () => {

 
  const [loginData,setloginData]=useState(init)
  const {signup} = useContext(AppContext)

  const navigate=useNavigate()
 
  const handleChange=(e)=>{
    const {name,value}=e.target;

    setloginData({
      ...loginData,
      [name]:value,
    })
  }



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


   <Heading fontWeight="medium">Login</Heading>
   <Box className={style.email}>
    <input className={style.name} name="email" type="email" placeholder='Email' onChange={handleChange}/>
    </Box>
    <Box className={style.pass}>
        <input className={style.name} name="password" type="password" placeholder='Password' onChange={handleChange}/>
    </Box>
    <Box>
    <button className={style.forget}>Forget your password?</button>
    </Box>
    <Box >
    <button  onClick={handlelogin} className={style.signbtn}>Sign in</button>
    </Box>
    <Box>
       
       <Link to= "/signup" ><button className={style.account}>Create account</button></Link> 
    </Box>
    <Footer/>
    </div>
  )
}

export default Login
