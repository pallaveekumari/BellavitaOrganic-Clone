// import React from 'react'
import style from "../Styles/LandingPage.module.css"
import { Box, Heading, Image } from '@chakra-ui/react'
import { homepage } from '../Utils/data'
import Productcard from '../Components/Productcard'
import Navbar from '../Components/Navbar'
import 'react-slideshow-image/dist/styles.css'
import React, { Component } from "react";
import Slider from "react-slick";
import { render } from "@testing-library/react"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {


    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
            return (
                <div>
                    <Navbar />
                 

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


    <Box className={style.bestbox}>
        <Box className={style.bestimgbox}>
            <img className={style.bestimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bestsellers_480x.png?v=1656513386" alt="" />
        </Box>
        <Box className={style.bestimgbox}>
            <img className={style.bestimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Face-Wash_480x.jpg?v=1655384779" alt="" />
        </Box>
        <Box className={style.bestimgbox}>
            <img className={style.bestimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Perfume_V1.2_480x.png?v=1656511638" alt="" />
        </Box>
        <Box className={style.bestimgbox}>
            <img className={style.bestimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Shampoos_480x.jpg?v=1655384818" alt="" />
        </Box>
    </Box>

                  

                    <Box className={style.fbox}>
                    {/* <img className={style.fimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1200x399_4bbe001a-978e-491b-a1a4-1fff50c9d9b9_1200x.jpg?v=1660116668" alt="" />
                    <img className={style.fimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_X_Bevzilla_desktop_1200x.jpg?v=1659342303" alt="" />
                    <img className={style.fimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hydra_Website_banner_1200x399_4f0cfee4-00b0-42bd-9ac5-55d8a235e0ad_1200x.png?v=1658296941" alt="" /> */}
                    <div>
             
                <Slider {...settings}>
                <div>
                <h3>1</h3>
                {/* <img className={style.fimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1200x399_4bbe001a-978e-491b-a1a4-1fff50c9d9b9_1200x.jpg?v=1660116668" alt="" /> */}
                </div>
                <div>
                <h3>2</h3>
                {/* <img className={style.fimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_X_Bevzilla_desktop_1200x.jpg?v=1659342303" alt="" /> */}
                </div>
                <div>
                <h3>3</h3>
                {/* <img className={style.fimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hydra_Website_banner_1200x399_4f0cfee4-00b0-42bd-9ac5-55d8a235e0ad_1200x.png?v=1658296941" alt="" /> */}
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                </Slider>
              </div>
                       
                  
                       


                    </Box>
                    <Box className={style.btn}>
                    
                    </Box>
                    <Box className={style.fbox2}>
                        <img className={style.fimg2} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Untitled_design_desktop_1200x.png?v=1659612770" alt="" />
                    </Box>
                    <Box className={style.mob}>
                        <img className={style.mobimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/mobikwik-1200X80_1200x.png?v=1661506595" alt="" />
                    </Box>
                    <Heading className={style.best}>BESTSELLERS</Heading>


                    <div className={style.items}>
                        {
                            homepage.map((el) => {
                                return <Productcard

                                    el={el}
                                />
                            })
                        }
                    </div>

                    <Heading fontSize="22px" color="#475D4B" mb="10px">IN THE SPOTLIGHT</Heading>


                    <Box className={style.spot}>
                        <Box className={style.spotbox} >
                            <img className={style.spotimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Skin_Care_V1_Medium_717c8f68-9b82-4c7c-9ff2-0e886f52103d_480x.jpg?v=1659102928" alt="" />
                        </Box>
                        <Box className={style.spotbox} >
                            <img className={style.spotimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Body_Care_V2_Medium_860c536d-b4a1-4a37-b3f3-4d1c4e1f004d_480x.jpg?v=1659102928" alt="" />
                        </Box>
                        <Box className={style.spotbox} >
                            <img className={style.spotimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hair_Care_V1.1_Medium_a2d75bd0-3b18-4c34-92cf-04d4c74e2bcb_480x.jpg?v=1659102927" alt="" />
                        </Box>
                        <Box className={style.spotbox} >
                            <img className={style.spotimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Summer_Essentials_V1_Medium_10dbdd6d-898e-4ea4-8d21-d6bfe4a70bc6_480x.jpg?v=1659102927" alt="" />
                        </Box>
                        <Box className={style.spotbox} >
                            <img className={style.spotimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Sensitive_Skin_V1_Medium_e87ef676-5616-4d72-b498-92e1808e3552_480x.jpg?v=1659102927" alt="" />
                        </Box>
                        <Box className={style.spotbox} >
                            <img className={style.spotimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Skin_Hydration_V1_Medium_bf8933f3-4b75-400b-a933-8adc21291912_480x.jpg?v=1659102928" alt="" />
                        </Box>
                        <Box className={style.spotbox} >
                            <img className={style.spotimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Detan___Exfoliation_V1_Medium_e5175d97-bd53-467d-8461-9454d3153379_480x.jpg?v=1659102928" alt="" />
                        </Box>
                        <Box className={style.spotbox} >
                            <img className={style.spotimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hair_Nourishment_V1_Medium_b8a624dd-42d3-422c-9ab2-cd97c1863f97_480x.jpg?v=1659102927" alt="" />
                        </Box>
                        <Box className={style.spotbox} >
                            <img className={style.spotimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Skin_Care_V1_Medium_717c8f68-9b82-4c7c-9ff2-0e886f52103d_480x.jpg?v=1659102928" alt="" />
                        </Box>
                        <Box className={style.spotbox} >
                            <img className={style.spotimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Body_Care_V2_Medium_860c536d-b4a1-4a37-b3f3-4d1c4e1f004d_480x.jpg?v=1659102928" alt="" />
                        </Box>
                        <Box className={style.spotbox} >
                            <img className={style.spotimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Summer_Essentials_V1_Medium_10dbdd6d-898e-4ea4-8d21-d6bfe4a70bc6_480x.jpg?v=1659102927" alt="" />
                        </Box>
                        <Box className={style.spotbox} >
                            <img className={style.spotimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Sensitive_Skin_V1_Medium_e87ef676-5616-4d72-b498-92e1808e3552_480x.jpg?v=1659102927" alt="" />
                        </Box>
                    </Box >


                    <Box className={style.btnfind}>

                    </Box>

                    <Heading fontSize="22px" color="#475D4B" mb="10px">FIND SOLUTIONS FOR</Heading>

                    <Box className={style.find}>
                        <Box className={style.findbox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Tan_Removal_Medium_1_480x.jpg?v=1659102685" alt="" />
                        </Box>
                        <Box className={style.findbox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Skin_Brightening_Medium_1_480x.jpg?v=1659102685" alt="" />
                        </Box>
                        <Box className={style.findbox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Dry___Dull_Lips_Medium_cf9c66a7-0dab-412c-825a-0386c49494ff_480x.jpg?v=1659102685" alt="" />
                        </Box>
                        <Box className={style.findbox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Dark_Circles_Medium_1_480x.jpg?v=1659102774" alt="" />
                        </Box>
                        <Box className={style.findbox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Pimples-Acne_Medium_dafd662e-0a24-4ad8-9ee4-67df76fa35bf_480x.jpg?v=1659102685" alt="" />
                        </Box>
                        <Box className={style.findbox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hair-Loss-_-Thinning-V1_Medium_e3d45b13-d781-4786-a456-5efa31adb360_480x.jpg?v=1659102685" alt="" />
                        </Box>
                        <Box className={style.findbox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Oil-Control-v1_Medium_932ba19f-8f57-417a-9606-4dd53c3bd457_480x.jpg?v=1659102685" alt="" />
                        </Box>
                        <Box className={style.findbox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Pigmentation-v1_Medium_f0a099e8-174b-4576-b81f-c943b875e9eb_480x.jpg?v=1659102685" alt="" />
                        </Box>
                        <Box className={style.findbox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Dandruff_Medium_1_480x.jpg?v=1659102844" alt="" />
                        </Box>
                    </Box>
                    <Box className={style.btnlux}>

                    </Box>
                    <Heading fontSize="22px" color="#475D4B" mb="20px">LUXURY FRAGRANCES</Heading>
                    <Box className={style.luxury}>
                        <Box className={style.lux}>
                            <img className={style.luximg} src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_men_680x680.jpg?v=1652265181" alt="" />
                        </Box>
                        <Box className={style.lux}>
                            <img className={style.luximg} src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_women_680x680.jpg?v=1652265252" alt="" />
                        </Box>
                        <Box className={style.lux}>
                            <img className={style.luximg} src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_little_luxuries_680x680.jpg?v=1652266061" alt="" />
                        </Box>
                        <Box className={style.lux}>
                            <img className={style.luximg} src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_unisex_680x680.jpg?v=1652266096" alt="" />
                        </Box>
                        <Box className={style.lux}>
                            <img className={style.luximg} src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_giftsets_680x680.jpg?v=1652266120" alt="" />
                        </Box>
                        <Box className={style.lux}>
                            <img className={style.luximg} src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_little_luxuries_680x680.jpg?v=1652266061" alt="" />
                        </Box>
                    </Box>

                    <Box className={style.media2} >

                        <img className={style.mediaimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brand-Comms-banner-V2_1200x.jpg?v=1660051394" alt="icons" />
                    </Box>
                    <Box>
                        <Heading as={`h2`} style={{ color: "#475D4B", fontSize: "25px" }}>MEDIA COVERAGE</Heading>
                    </Box>

                    <Box className={style.media}>
                        <Box className={style.mediabox}>
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/ANI_1_480x.jpg?v=1660127230" alt="" />
                        </Box>
                        <Box className={style.mediabox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Elle-V1_480x.png?v=1660127235" alt="" />
                        </Box>
                        <Box>
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hindustan-Times-V1_1_480x.jpg?v=1660127269" alt="" />
                        </Box>
                        <Box className={style.mediabox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/iDiva_480x.jpg?v=1660125648" alt="" />
                        </Box>
                        <Box className={style.mediabox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Lifestyle-Asia_1_480x.jpg?v=1660127274" alt="" />
                        </Box>
                        <Box className={style.mediabox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Mint_480x.jpg?v=1660125696" alt="" />
                        </Box>
                        <Box className={style.mediabox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/PinkVilla_480x.jpg?v=1660125706" alt="" />
                        </Box>
                        <Box className={style.mediabox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/POPXO_c5c98406-db49-4627-aedb-38a9c9c87511_480x.jpg?v=1660125726" alt="" />
                        </Box>
                        <Box className={style.mediabox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Swirlster-NDTV_480x.jpg?v=1660125743" alt="" />
                        </Box>
                        <Box className={style.mediabox} >
                            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Your-Story_480x.jpg?v=1660127274" alt="" />
                        </Box>
                    </Box>


                    <Box style={{ height: "30px", width: "90%", border: "1px solid red", margin: "auto" }}></Box>

                    <Box className={style.bella} >
                        <Image className={style.bellaimg} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Bella-Cash-Section-Desktop-v1_1200x.jpg?v=1660051412" alt="" />

                    </Box>
                    <Box className={style.our} >
                        <Box style={{ height: "80px", width: "100%", border: "1px solid red", background: "#475D4B", marginTop: "200px" }}>
                            <Box style={{ height: "80px", width: "500px", border: "1px solid red", color: "white", marginLeft: "650px", fontSize: "20px", fontFamily: "Segoe UI" }}>
                                <Heading style={{ marginTop: "15px" }}>DOWNLOAD OUR APP</Heading>
                            </Box>

                            <Image mt="-240px" ml="200px" src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Download_our_App_Section_Image_V_460x460.png?v=1650369432" alt="" />

                            <Box display="flex" gap="25px">
                                <Box height="68px" width="178px" border="1px solid red" mt="-185px" ml="700px">
                                    <Image src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/playstore_460x460_efa998ac-e0d8_460x460.png?v=1650369394" alt="" />
                                </Box>
                                <Box height="68px" width="178px" border="1px solid red" mt="-185px">
                                    <Image src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/app-store-card_460x460_35fc55d1_460x460.png?v=1650369409" alt="" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>



                </div>
            )
        }
   
export default LandingPage;


