import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import style from "../Styles/Navbar.module.css"
// import Link from "react-router-dom"
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
  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  const [text, setText] = useState("")

  const navigate = useNavigate()
  const { handlesearch, cartdata, handleDeleteData, handleqty, handleTotal, total } = useContext(AppContext)

  useEffect(() => {
    handleTotal()
  })



  return (
    <div>
      <Box style={{ height: "40px", width: "100%", border: "1px solid #4444", color: "#475D4B", fontStyle: "Segoe UI", background: "#e4efda", display: "flex", justifyContent: "center", gap: "20px" }}>
        <Heading style={{ fontSize: "15px", marginTop: "10px" }}>Flexi Box - Buy any 4 products RS499</Heading>
        <button style={{ background: "#475D4B", color: "white", borderRadius: "5px", width: "110px", height: "30px", marginTop: "5px", border: "none" }}>Shop Now</button>
      </Box>
      <Box style={{ height: "70px", width: "85%", display: "flex", justifyContent: "space-between", margin: "auto" }}>


        <Box className={style.loginlogo}>
          <Link to="/login">
            <i className="fa-solid fa-user-plus"></i>
          </Link>
        </Box>
        <Link to="/">
          <Box style={{ display: "flex", justifyContent: "space-evenly", height: "70px", width: "230px" }}>
            <img className={style.navicon} style={{ height: "60px", width: "60px" }}
              src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_220_x_220_480x.png?v=1653304683" alt="icon" />
            <img className={style.navicon} style={{ height: "60px", width: "60px" }}
              src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701" alt="icon1" />
            <img className={style.navicon} style={{ height: "60px", width: "60px" }}
              src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721" alt="icon2" />
          </Box>
        </Link>
        <Box className={style.navbox}>
          <Box className={style.navb}>
            <input className={style.sinput} value={text}
              onChange={(e) => setText(e.target.value)}
              type="text" placeholder='Search for Products' />
          </Box>
          <Box className={style.searchlogo}>
            <button onClick={() => {
              handlesearch(text)
              alert("Go Below For Results")
            }}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </Box>
          <Box className={style.searchlogo}>
            <i className="fa-solid fa-heart"></i>
          </Box>


          <Box>

            <Button className={style.bagbtn}
              ml='4'
              onClick={() => {
                setOverlay(<OverlayTwo />)
                onOpen()
              }}
            >
             <Box> {cartdata.length} <i className="fa-solid fa-bag-shopping"></i> </Box> 
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <Button>
                  <Link to="/product"><button>Continue Shopping</button></Link>
                </Button>
                <ModalHeader>Your Cart</ModalHeader>

                {/* <ModalCloseButton /> */}
                <ModalBody>
                  {/* <Text>Custom backdrop filters!</Text> */}

                  {cartdata.length > 0 ? (
                    cartdata.map((el) => {
                      return (

                        <Box className={style.container}>
                          <Box className={style.mainbox}>
                            <Box className={style.cimg}>
                              <img className={style.cbox} src={el.image} alt="" />
                            </Box>
                            <Text>{el.title}</Text>
                          </Box>
                          <Box className={style.cprice}>

                            <Text>RS: {el.price * el.qty}</Text>

                            <Text as="s">{el.strikeprice}</Text>

                            <Box className={style.cbutton}>

                              <Button disabled={el.qty === 1} onClick={() => handleqty(el.id, -1)}>-</Button>
                              <Text>{el.qty}</Text>
                              <Button onClick={() => handleqty(el.id, 1)}>+</Button>

                              <Button className={style.del} onClick={() => handleDeleteData(el.id)}>
                                <i className="fa-solid fa-trash-can"></i>
                              </Button>
                            </Box>
                          </Box>



                        </Box>
                      )
                    })
                  ) :
                    <Box>
                      <h1>Your Cart Is Empty! Please Add Products For Shopping</h1>
                    </Box>
                  }
                </ModalBody>
                <ModalFooter>
                  <Box>Total:{total}</Box>
                  <Button>CHECKOUT</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>








          </Box>
        </Box>


      </Box>
      <Box className={style.snav} style={{ height: "30px", width: "87%", margin: "auto", borderBottom: "1px solid #4444" }}>
        <Box style={{ height: "100%", width: "80%", margin: "auto" }}>
          <Box fontSize={{
            "base": "8px",
            "md": "10px",
            "lg": "13px"
          }} style={{ display: "flex", maxHeight: "30px", justifyContent: "space-evenly", color: "#475D4B" }}>
            <Box className={style.build}>SHOP ALL</Box>

            <Link to="/product" ><Box className={style.build}>NEW ARRIVALS</Box></Link>
            <Box className={style.build}>BESTSELLERS</Box>
            <Menu isLazy>
              <MenuButton className={style.body}>SKIN CARE</MenuButton>
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
              <MenuButton className={style.body}>BODY CARE</MenuButton>
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
              <MenuButton className={style.body}>HAIR CARE</MenuButton>
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
              <MenuButton className={style.body}>COMBOS</MenuButton>
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
            <Box className={style.build}>BUILD A BOX</Box>
          </Box>
        </Box>

      </Box>








    </div>
  )
}

export default Navbar
