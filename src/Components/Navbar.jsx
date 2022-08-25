import { Box,Flex } from '@chakra-ui/react'
import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Portal
  
  } from '@chakra-ui/react'





const Navbar = () => {
  return (
    <div>
      <Box style={{height:"40px",width:"100%",border:"1px solid #4444",color:"#475D4B",fontStyle:"Segoe UI",background:"#e4efda",display:"flex",justifyContent:"center",gap:"20px"}}>
            <h1 style={{fontSize:"15px"}}>Flexi Box - Buy any 4 products RS499</h1>
            <button style={{background:"#475D4B",color:"white",borderRadius:"5px",width:"110px",height:"30px",marginTop:"5px",border:"none"}}>Shop Now</button>
      </Box>
      <Box style={{height:"70px",width:"87%",border:"1px solid red",display:"flex",margin:"auto",justifyContent:"space-between"}}>
           <button>
            <img src="" alt="" />
           </button>
           <Box style={{display:"flex",justifyContent:"space-evenly",height:"70px",width:"230px"}}>
           <img style={{height:"60px",width:"60px"}}
           src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_220_x_220_480x.png?v=1653304683" alt="icon" />
           <img style={{height:"60px",width:"60px"}}
           src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701" alt="icon1" />
           <img style={{height:"60px",width:"60px"}}
           src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721" alt="icon2" />
           </Box>
           <Box >
           <input style={{fontStyle:"Segoe UI",width:"250px",height:"40px",borderRadius:"10px",border:"1px solid #4444"}} type="text" placeholder='Search for Products'/>
           </Box>
           <Box>
            <i class="fa-solid fa-user-plus"></i>
           </Box>
           <Box>
            <img src="" alt="" />
           </Box>
      </Box>
      <Box style={{height:"30px",width:"87%",margin:"auto",borderBottom:"1px solid #4444"}}>
        <Box style={{height:"40px",width:"80%",margin:"auto",_hover:{cursor:"pointer"}}}>
        <Box style={{display:"flex",justifyContent:"space-evenly",fontSize:"13px",color:"#475D4B" }}>
            <Box>SHOP ALL</Box>
             <Box>NEW ARRIVALS</Box>
             <Box>BESTSELLERS</Box>
             
             <Menu>
  <MenuButton as={Button}>
    {/* Actions */}
    <Box>SKIN CARE</Box>
  </MenuButton>
  <Box display="flex" border="1px solid black">
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
 
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
  </Box>
</Menu>
             <Box>BODY CARE</Box>
             <Box>HAIR CARE</Box>
             <Box>PERFUMES</Box>
             <Box>COMBO</Box>
             <Box>BUILD A BOX</Box>
        </Box>
        </Box>
     
      </Box>






    </div>
  )
}

export default Navbar
