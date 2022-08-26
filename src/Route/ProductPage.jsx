import styled from '@emotion/styled'
import React, { useState } from 'react'
import Navbar from "../Components/Navbar"
import style from "../Styles/ProductPage.module.css"
import {Box} from "@chakra-ui/react"
import { productpage } from '../Utils/data'
import ProductDetails from '../Components/ProductDetails'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Portal
} from '@chakra-ui/react'
const ProductPage = ()=> {

  const [data,setData]=useState(productpage)

const handlesort=(type)=>{
  if(type==="LTH")
  {
    const updated=data.sort((a,b)=>{
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
  setData([...updated])
  }
  else
  {
     const updated=data.sort((a,b)=>{
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
     setData([...updated])
  }
}

const handlesorttitle=(type)=>{
  if(type==="ATZ")
  {
    const updated=data.sort((a,b)=>{
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
  setData([...updated])
  }
  else
  {
     const updated=data.sort((a,b)=>{
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
     setData([...updated])
  }
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


        <Box className={style.say}>
          <img className={style.sayimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/collections/1200x235_1200x.jpg?v=1660117006" alt="" />
        </Box>


        <Popover>
  <PopoverTrigger>
    <Button>Search</Button>
  </PopoverTrigger>
 
    <PopoverContent>
      <PopoverArrow />
    
    
      <PopoverBody>
        {/* <Button colorScheme='blue'>Button</Button> */}
        <input type="text" placeholder='search your products'/>
        <Button>Go</Button>
      </PopoverBody>
     
    </PopoverContent>
 
</Popover>




        <Box className={style.sorting}>Sort By:
        <Menu isLazy>
  <MenuButton>Featured</MenuButton>
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
              {/* <i className="fa-solid fa-greater-than"></i> */}
              <p>Collection</p>
              {/* <i className="fa-solid fa-greater-than"></i> */}
              <p>#New Arrivals</p>
            </Box>

            <Box>
            {/* <i className="fa-solid fa-bars-sort"></i> */}
            <p>REFINE BY</p>
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
     
          <Box className={style.mid}>
          
            
                 {
                  data.map((el)=>{
                    return <ProductDetails
                    //  key={el.id}
                    // topimg={el.topimg}
                    // image={el.image}
                    // title={el.title}
                    // category={el.category}
                    // price={el.price}
                    // strikeprice={el.strikeprice}
                    // rating={el.rating}
                    // id={el.id}
                    el={el}
                    />
                  })
                 }


         
          </Box>

         </Box>


    </div>
  )
}

export default ProductPage
