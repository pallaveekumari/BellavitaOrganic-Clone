import React from 'react'
import style from "../Styles/Login.module.css"
import {Heading,Box,Link,Button} from "@chakra-ui/react"
const Login = () => {


  
  return (
    <div>
      
   <Heading fontWeight="medium">Login</Heading>
   <Box className={style.email}>
    <input className={style.name} type="email" placeholder='Email'/>
    </Box>
    <Box className={style.pass}>
        <input className={style.name} type="password" placeholder='Password'/>
    </Box>
    <Box>
    <Link className={style.forget}>Forget your password?</Link>
    </Box>
    <Box >
    <button className={style.signbtn}>Sign in</button>
    </Box>
    <Box>
        <Link className={style.account}>Create account</Link>
    </Box>
    </div>
  )
}

export default Login
