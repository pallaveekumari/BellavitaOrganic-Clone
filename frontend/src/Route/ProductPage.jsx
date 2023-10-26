import styled from '@emotion/styled'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from "../Components/Navbar"
import style from "../Styles/ProductPage.module.css"
import {Box,Spinner} from "@chakra-ui/react"
import { productpage } from '../Utils/data'
import ProductDetails from '../Components/ProductDetails'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Button,
 
} from '@chakra-ui/react'
import { AppContext } from '../Context/AppContext'
import Footer from '../Components/Footer'
const ProductPage = ()=> {

  const [data,setData]=useState(productpage)

 

  
  const {getProductdata,productdata,handlesorttitle,handlesort,loading}=useContext(AppContext)


  useEffect(()=>{
    getProductdata()
  },[])


  

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


        <Box className={style.say}>
          <img className={style.sayimg} src="https://images.yourstory.com/cs/1/b3c1ad06ab5e11e88691f70342131e20/BellaVitaOrganicFeatureProductImage-1577443070160.jpg" alt="" />
        </Box>





        <Box className={style.sorting}>Sort By:
        <Menu isLazy>
  <MenuButton className={style.featured}>Featured</MenuButton>
  <MenuList>
    
   
    <MenuItem>
      <Button onClick={()=>handlesorttitle("ATZ")}>
      Alphabetic A-Z
      </Button>
    </MenuItem>
    <MenuItem>
        <Button onClick={()=>handlesorttitle("ZTA")}>
          Alphabetic Z-A
          </Button>
    </MenuItem>
    <MenuItem>
    <Button onClick={()=>handlesort("LTH")}>Price, low to high</Button>
    </MenuItem>
    <Button onClick={()=>handlesort("HTL")}>
    <MenuItem>Price, high to low</MenuItem>
    </Button>
   
    </MenuList>
</Menu>
        
        </Box>
         <Box className={style.main}>

        <Box className={style.side}>
            <Box className={style.home}>
              <p>Home</p>
            
              <p>Collection</p>
            
              <p>#New Arrivals</p>
            </Box>

            

            <p className={style.cat}>CATEGORIES</p>
            <Box className={style.category}> Shop All </Box>
            <Box className={style.category}> New Arrivals </Box>
            <Box className={style.category}> Bestsellers </Box>
            <Box className={style.category}> Skin Care </Box>
            <Box className={style.category}> Hair Care </Box>
            <Box className={style.category}> Body Care </Box>
            <Box className={style.category}> Perfumes </Box>
            <Box className={style.category}> Combos</Box>
            <Box className={style.category}> Build a Box</Box>
        </Box>
     
 {
  loading ? <Spinner
  thickness='8px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  className={style.spin}
  />
  : 
 
          <Box className={style.mid}>
          
            
                 {
                  productdata && productdata.map((el)=>{
                    return <ProductDetails
                    el={el}
                    />
                  })
                 }


         
          </Box>
}
         </Box>

<Footer/>
    </div>
  )
}

export default ProductPage
