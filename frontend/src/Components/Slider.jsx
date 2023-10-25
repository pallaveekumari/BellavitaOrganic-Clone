import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import style from "../Styles/Slider.module.css";

import { Box, Img, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const data = [

  {
    id: 1,
    topimg: "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733",

    image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-01Medium_765x.jpg?v=1659101821",
    himage: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-02Medium_360x.jpg?v=1659101350",
    title: "C-Glow Face Wash, 100ml",

    category: "De-Tan & Brightening",
    price: 204.00,
    strikeprice: "₹249.00"

  },
  {
    id: 2,
    topimg: "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733",

    image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_Medium_a7654ecf-8f6c-4b46-9d27-f3c5e8a30f28_765x.jpg?v=1659101350",
    himage: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Eyelift-02Medium_360x.jpg?v=1659101492",
    title: "Exfoliate Face And Body Scrub Grit, 75gm",

    price: 220.00,
    strikeprice: "₹275.00"


  },
  {
    id: 3,

    topimg: "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733",
    image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Eyelift-01Medium_765x.jpg?v=1659101492",
    himage: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-02Medium_360x.jpg?v=1661428887",
    title: "EyeLift Under Eye Cream, 20gm",

    category: "Repairs Dark Circles, Puffy Eyes & Wrinkles",
    price: 275.00,
    strikeprice: "₹325.00"


  },
  {
    id: 4,
    topimg: "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733",

    image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-01Medium_765x.jpg?v=1659101603",
    himage: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate_BevzillaCombo-02Medium_360x.jpg?v=1659101713",
    title: "NicoLips Lip Brightening Scrub, 20gm",

    category: "Lip Brightening, Nourishing & Repairing",
    price: 364.00,
    strikeprice: "₹450.00"


  },
  {
    id: 5,
    topimg: "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733",

    image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate_BevzillaCombo-01Medium_765x.jpg?v=1659101713",
    himage: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-02Medium_360x.jpg?v=1659101821",
    title: "Ultimate Coffee Boost Combo",

    category: "Exfoliate Face & Body Scrub, Coffee Cubes",
    price: 399.00,
    strikeprice: "₹624.00"


  },
  {
    id: 6,
    topimg: "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733",

    image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-AcneFaceGel-01Medium_765x.jpg?v=1659101934",
    himage: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-AcneFaceGel-02Medium_360x.jpg?v=1659101934",
    title: "Anti Acne, Pimple Scar Spots Removal Gel For Men & Women, 50gm",

    category: "Pimple Scar Removal & Skin Clarifying",
    price: 343.00,
    strikeprice: "₹399.00"


  },
  {
    id: 7,
    topimg: "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733",

    image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-01_765x.jpg?v=1652421642",
    himage: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-02_1410db0a-914d-4318-a11b-59f3e68c7cc6_360x.jpg?v=1652421646",
    title: "Luxury Perfume Gift Set For Man - 4x20ml",

    category: "Eau De Parfum",
    price: 749.00,
    strikeprice: "₹849.00"


  },
  {
    id: 8,
    topimg: "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733",

    image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Kumkumadi-Face-Oil-01_765x.jpg?v=1652341175",
    himage: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiFaceOil-02_360x.jpg?v=1652341175",
    title: "Ayurvedic Kumkumadi Face Oil, 30ml",

    category: "Skin Brightening & Hydrating Oil For Youthful Skin",
    price: 499.00,
    strikeprice: "₹599.00"
  }

  // {
  //   images: "https://files.myglamm.com/site-images/400x400/Rare-(1).jpg",
  //   title: "MyGlamm LIT Velvet Matte Liquid Lipstick...",
  //   dis: "Hydrating, Velvet Matte Liquid Lipcolour",
  //   rating: 4.9,
  //   ratingcount: "2054 rating",
  //   price: "₹217",
  // },

]


export default function Sliderthird() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,

  };

  const { handleAddToCart } = useContext(AppContext)
  const [hover, setHover] = useState(false);

  return (
    <div className={style.container}>

      <div style={{

        textAlign: "center",
        height: "100%",
        width: "95%",
        margin:"auto",
        // marginLeft: "2.5rem",
        border: "2px solid blue",

      }}>
        <Slide {...settings} easing="ease">
          {data.map((el) =>
            <div className={style.box} key={el.id}>
              <div className={style.topimg}>
                <img className={style.top} src={el.topimg} alt="" />
              </div>
              <div className={style.best}>
                <img src={el.image} alt="" />
              </div>
              <div className={style.lowerData} >
                <h1 className={style.title}>{el.title}</h1>
                <p className={style.category}>{el.category}</p>
                <div className={style.boxes}>
                  <h2>RS: {el.price}</h2>
                  <Text as="s">{el.strikeprice}</Text>
                </div>
                <button onClick={() => {
                  handleAddToCart(el)
                  alert("Item added to your cart")
                }
                }

                  className={style.addbtn}>ADD TO CART</button>
              </div>


            </div>)}
        </Slide>


      </div>
    </div>
  );
}

