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


  const handlelogin=()=>{

    for(let i=0;i<signup.length;i++)
    {
      if
      (
         signup[i].email===loginData.email && 
         signup[i].password===loginData.password
      )
      {
        alert("login successfully")
        navigate("/")
        return;
      }
      else
      {
           alert("Wrong details....")
      }
    }

  }
  return (
    <div>
      <Navbar/>
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
