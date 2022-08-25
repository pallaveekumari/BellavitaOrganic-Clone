import React, { useState } from 'react'
import style from "../Styles/Signup.module.css"
import {Heading,Box} from "@chakra-ui/react"
import { useState } from 'react';

// const initial = {
//   email:"",
//   password:""
// };
const Signup = () => {

// const [signData,setsignData]=useState(initial)

// const handleChange=(e)=>{
 
// }

  return (
    <div>
      <Heading fontWeight="medium" fontSize="50px" fontFamily="Segoi-ui">Create account</Heading>
      <Box className={style.fname}>
        <input className={style.name} type="text" placeholder='First Name'/>
      </Box >
      <Box className={style.lname}>
        <input className={style.name}  type="text" placeholder='Last Name'/>
      </Box>
      <Box className={style.lname}>
        <input  className={style.name} type="email" placeholder='Email'/>
      </Box>
      <Box className={style.lname}>
        <input  className={style.name} type="password" placeholder='Password'/>
      </Box>
      <Box>
        <button className={style.signbtn}>Create</button>
    </Box>
    </div>
  )
}

export default Signup
