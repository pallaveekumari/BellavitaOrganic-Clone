import React from 'react'
import { Box, Flex, Heading, Image, Button } from "@chakra-ui/react"
import style from "../Styles/Footer.module.css"
const Footer = () => {
  return (
    <div className={style.mainContainer}>
      <Box className={style.container}>


        <Box className={style.container1}>
          <p className={style.info}>INFORMATION</p>


          <Box className={style.text} >Blogs</Box>
          <Box className={style.text} >Newsroom</Box>
          <Box className={style.text} >Terms & Conditions</Box>
          <Box className={style.text} >Privacy Policy</Box>
          <Box className={style.text} >Refund and Return</Box>
          <Box className={style.text} >Shipping Policy</Box>
        </Box>
        <Box className={style.container2}>
          <p className={style.info} >SUPPORT</p>
          <Box className={style.text} >About Us</Box>
          <Box className={style.text} >Contact Us</Box>
          <Box className={style.text} >Order Tracking</Box>
          <Box className={style.text} >All Products</Box>
          <Box className={style.text} >FAQ</Box>
        </Box>
        <Box className={style.container3}>

          <p className={style.info} >CONTACT US</p>

          <Box className={style.home}>
            <i id={style.pint} className="fa-solid fa-house"></i>
            <Box className={style.text} >Office Location: Plot no. 417 , Udyog Vihar Phase |||, Gurgaon,Haryana,India
            </Box>
          </Box>
          <Box className={style.home}>
            <i id={style.pint} class="fa-solid fa-envelope"></i>
            <Box className={style.text} >shop@bellavitaorganic.com</Box>
          </Box>
          <Box className={style.home}>
            <i id={style.pint} class="fa-solid fa-phone"></i>
            <Box className={style.text} >+91 9311732440</Box>
          </Box>
          <Box className={style.text} >Timing:9:00 AM To 9:0 PM , Monday To Sunday</Box>
        </Box>
        <Box className={style.container4}>
          <p className={style.info} >OUR NEWSLETTER</p>

          <Box className={style.text} >Sign up here to get the latest news,updates and special offers delivered to your inbox</Box>
          <Box className={style.text} >Plus, you'll be the first to know about our discounts!</Box>
          <Box>
            <input className={style.input} type="text" placeholder='Enter Your Email Address' />
          </Box>
          <Box>
            <button className={style.subbtn} >SUBMIT</button>
          </Box>
        </Box>

      </Box>


      <Box className={style.bottom}>

        <Box className={style.boticons}>
          <Box className={style.insta}>
            <i style={{ height: "100%", width: "100%" }} class="fa-brands fa-instagram"></i>
          </Box>
          <Box className={style.insta}>
            <i class="fa-brands fa-square-facebook"></i>
          </Box>
          <Box className={style.insta}>
            <i class="fa-brands fa-youtube"></i>
          </Box>
          <Box className={style.insta}>
            <i class="fa-brands fa-twitter"></i>
          </Box>
          <Box className={style.insta}>
            <i class="fa-brands fa-pinterest"></i>
          </Box>

        </Box>
        <Box className={style.foot}>
          <p>@ 2022 Bella Vita Organic</p>
        </Box>
      </Box>
      <Box className={style.mfoot}>

        <Box className={style.fbox}>
          <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/bellavita-logo_256x256_2cf787ef_480x.png?v=1651667212" alt="" />
        </Box>
        <Box className={style.supp}>
          <p>Information</p>
          <i class="fa-solid fa-arrow-right"></i>
        </Box>

        <Box className={style.supp}>
          <p>Support</p>
          <i class="fa-solid fa-arrow-right"></i>
        </Box>
        <Box className={style.supp}>
          <p>Contact Us</p>
          <i class="fa-solid fa-arrow-right"></i>
        </Box>
        <Box className={style.join}>
          <p>JOIN THE CLUB</p>
        </Box>


        <Box className={style.submit}>
          <input className={style.subinput} type="text" placeholder='Enter Your Email' />
          <Button className={style.submitbtn} >SUBMIT</Button>
        </Box>


        <Box className={style.ficon}>

          <i class="fa-brands fa-square-facebook"></i>

          <i class="fa-brands fa-youtube"></i>


          <i class="fa-brands fa-twitter"></i>

          <i class="fa-brands fa-pinterest"></i>


        </Box>


        <Box className={style.fbell}>
          <p>@2022, Bella Vita Organic</p>
        </Box>

      </Box>





    </div>
  )
}

export default Footer
