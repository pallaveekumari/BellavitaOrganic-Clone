import { Box,Flex,Heading,Text ,Link} from '@chakra-ui/react'
import React, { useContext } from 'react'
import style from "../Styles/Navbar.module.css"

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
   
  
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'





const Navbar = () => {



  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const OverlayTwo =()=>(
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

const navigate=useNavigate()
const {cartdata,handleDeleteData,handleDecqty,qty,handleqty} =useContext(AppContext)

  return (
    <div>
      <Box style={{height:"40px",width:"100%",border:"1px solid #4444",color:"#475D4B",fontStyle:"Segoe UI",background:"#e4efda",display:"flex",justifyContent:"center",gap:"20px"}}>
            <Heading style={{fontSize:"15px",marginTop:"10px"}}>Flexi Box - Buy any 4 products RS499</Heading>
            <button style={{background:"#475D4B",color:"white",borderRadius:"5px",width:"110px",height:"30px",marginTop:"5px",border:"none"}}>Shop Now</button>
      </Box>
      <Box style={{height:"70px",width:"85%",border:"1px solid red",display:"flex",justifyContent:"space-between",margin:"auto"}}>
           <Box className={style.loginlogo}>
           <i className="fa-solid fa-user-plus"></i>
           </Box>
           <Box style={{display:"flex",justifyContent:"space-evenly",height:"70px",width:"230px"}}>
           <img style={{height:"60px",width:"60px"}}
           src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_220_x_220_480x.png?v=1653304683" alt="icon" />
           <img style={{height:"60px",width:"60px"}}
           src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701" alt="icon1" />
           <img style={{height:"60px",width:"60px"}}
           src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721" alt="icon2" />
           </Box>
           <Box className={style.navbox}>
              <Box>
            <input style={{fontStyle:"Segoe UI",width:"300px",height:"40px",borderRadius:"10px",border:"1px solid #4444",marginTop:"15px"}} type="text" placeholder='Search for Products'/>
            </Box>
            <Box className={style.searchlogo}>
            <i className="fa-solid fa-magnifying-glass"></i>
            </Box>
            <Box className={style.searchlogo}>
            <i className="fa-solid fa-heart"></i>
            </Box>
            <Box className={style.searchlogo}>
            
        <Button
        ml='4'
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
      >
        <i className="fa-solid fa-bag-shopping"></i>
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <Button>
            <Link>Continue Shopping</Link>
          </Button>
          <ModalHeader>Your Cart</ModalHeader>
          
          {/* <ModalCloseButton /> */}
          <ModalBody>
            {/* <Text>Custom backdrop filters!</Text> */}

           {cartdata.length > 0 ? (
               cartdata.map((el)=>{
                return(

                  <Box className={style.container}>
                  <Box className={style.mainbox}>
                     <Box className={style.cimg}>
                      <img className={style.cbox} src={el.image} alt="" />
                    </Box>
                    <Text>{el.title}</Text>
                    <Box className={style.cprice}>
                      <Text>{el.price}</Text>
                      <Text>{el.strikeprice}</Text>
                    </Box>
                    <Box className={style.cbutton}>
                      <Button onClick={handleDecqty}>-</Button>
                      <Text>{qty}</Text>
                      <Button onClick={handleqty}>+</Button>
                      <Button onClick={()=>handleDeleteData(el.id)}>
                      <i className="fa-solid fa-trash-can"></i>
                      </Button>
                    </Box>
                   
                  </Box>
                  </Box>
                )
               })
           ) : 
           <Box>
            <h1>Your Cart Is Empty!</h1>
            </Box>
            }
          </ModalBody>
          <ModalFooter>
            <Button>CHECKOUT</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  







            </Box>
           </Box>
          
          
      </Box>
      <Box style={{height:"30px",width:"87%",margin:"auto",borderBottom:"1px solid #4444"}}>
        <Box style={{height:"40px",width:"80%",margin:"auto",_hover:{cursor:"pointer"}}}>
                <Box style={{display:"flex",justifyContent:"space-evenly",fontSize:"15px",color:"#475D4B" }}>
                    <Box>SHOP ALL</Box>
                    <Box>NEW ARRIVALS</Box>
                    <Box>BESTSELLERS</Box>
                    <Menu isLazy>
  <MenuButton>SKIN CARE</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
    <p className={style.bath}>BY PRODUCT TYPE</p>
    <MenuItem>ALL SKINCARE PRODUCTS</MenuItem>
    <MenuItem>FACE CREAM</MenuItem>
    <MenuItem>FACE SERUM</MenuItem>
    <MenuItem>FACE TONER</MenuItem>
    <MenuItem>FACE GEL</MenuItem>
    <MenuItem>FACE MOISTURISERS</MenuItem>
      <img className={style.img} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceSerum-01_1_765x.jpg?v=1651698248" alt="" />
      </MenuList>
</Menu>
                    
      <Menu isLazy >
  <MenuButton>BODY CARE</MenuButton>
  <MenuList className={style.menu}>
   
    <p className={style.bath}>BATH BODY</p>
    <MenuItem>ALL BODY CARE PRODUCTS</MenuItem>
    <MenuItem>BODY SOAPS</MenuItem>
    <MenuItem>BODY WASH</MenuItem>
    <MenuItem>BODY SCRUB</MenuItem>
    <MenuItem>BODY LOTION</MenuItem>
    <img className={style.img} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Body_Care_Megamenu.png?v=1651666035" alt="" />
  </MenuList>
</Menu>
<Menu isLazy>
  <MenuButton>HAIR CARE</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
    <p className={style.bath}>BY PRODUCT TYPE</p>
    <MenuItem>ALL HAIRCARE PRODUCTS</MenuItem>
    <MenuItem>SHAMPOO</MenuItem>
    <MenuItem>CONDITIONER</MenuItem>
    <MenuItem>HAIR OIL</MenuItem>
    <MenuItem>HAIR MASK</MenuItem>
    <MenuItem>HAIR LOSS</MenuItem>
      <img className={style.img} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hair_Care_Medium_9f61e8b2-fbfd-4dde-b6f2-4c265b70be8a.jpg?v=1659103665" alt="" />
      </MenuList>
</Menu>
<Menu isLazy>
  <MenuButton>PERFUMES</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
    
    <MenuItem>ALL PERFUMES</MenuItem>
    <MenuItem>PERFUMES FOR HER</MenuItem>
    <MenuItem>PERFUMES FOR HIM</MenuItem>
    <MenuItem>UNISEX PERFUMES</MenuItem>
    <MenuItem>BODY PERFUM</MenuItem>
    <MenuItem>LITTLE LUXURY</MenuItem>
      <img className={style.img} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Perfumes_Medium_c0c80af3-da25-4c9f-8e7f-c00c84f76a51.jpg?v=1659103815" alt="" />
      </MenuList>
</Menu>
<Menu isLazy>
  <MenuButton>COMBOS</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
    
    <MenuItem>GIFT BOXES</MenuItem>
    <MenuItem>ALL COMBOS</MenuItem>
    <MenuItem>BESTSELLER COMBOS</MenuItem>
    <MenuItem>SKIN COMBOS</MenuItem>
    <MenuItem>HAIR COMBOS</MenuItem>
    <MenuItem>PERFUME COMBOS</MenuItem>
    <MenuItem>C GLOW RANGE</MenuItem>
    <MenuItem>KUMKUMADI RANGE</MenuItem>
     
      </MenuList>
</Menu>
                    <Box>BUILD A BOX</Box>
                </Box>
        </Box>
     
      </Box>








    </div>
  )
}

export default Navbar
