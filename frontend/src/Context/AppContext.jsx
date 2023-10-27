import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [signup, setsignup] = useState([]);

  const [isAuth, setisAuth] = useState(false);
  const [userData, setuserData] = useState([]);

  const [cartdata, setcartdata] = useState([]);

  const [productdata, setproductdata] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleTotal = () => {
    // console.log(cartdata)
    let totalprice = cartdata.reduce((sum, el) => {
      return sum + (el.price * el.qty);
    }, 0);
    // console.log(totalprice)
    setTotal(totalprice);
  };

  const handleAddsign = async (signupdata) => {


    try {
      let res = await axios.post("https://organic-dl5w.onrender.com/signup", signupdata);
      return res.data;
    } catch (err) {
      console.log("error", err);
      return  err.response.data
    }
  };

  const handleUserData = ({ email }) => {
    setuserData({
      ...userData,
      email: email,
    });
  };

  const handlelogin = async (payload) => {
    // setisAuth(true)

    try {
      let res = await axios.post("https://organic-dl5w.onrender.com/login", payload);
      return res.data;
    } catch (err) {
      console.log("error", err);
      return  err.response.data
    }
  };
  const handleGetAllCartData = async () => {
    try {
      let token = localStorage.getItem("token");
      let data = await axios.get("https://organic-dl5w.onrender.com/getcartdata", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //  console.log(data)
      setcartdata(data.data.cartData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = async (payload) => {
    // setcartdata([...cartdata,data])

    try {
      let token = localStorage.getItem("token");
      let data = await axios.post("https://organic-dl5w.onrender.com/addtocart", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("data",data);
     
        return data.data;
      
    } catch (err) {

      console.log("error", err);
      return err.response.data
    }
  };

  const handleDeleteData = async(id) => {
   try{
    let token = localStorage.getItem("token");
    let data=await axios.get(`https://organic-dl5w.onrender.com/removecartdata/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data.data
   }
   catch(err){
    console.log('error',err)
    return err.response.data
   }
  };

  const handlesearch = (query) => {
    let updatedData = productdata.filter((el,i)=>{
      return el['title'].toLowerCase().includes(query.toLowerCase());
    })
    console.log('searched data is ',updatedData)
    setproductdata(updatedData);
  };

  const getProductdata = () => {
    setLoading(true);
    axios
      .get(`https://organic-dl5w.onrender.com/allproducts`)

      .then((res) => {
        setproductdata(res.data.data);
        setLoading(false);
      });
  };

  const handlesort = (type) => {
    if (type === "LTH") {
      const updated = productdata.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        } else if (a.price < b.price) {
          return -1;
        } else {
          return 0;
        }
      });
      setproductdata([...updated]);
    } else {
      const updated = productdata.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        } else {
          return 0;
        }
      });
      setproductdata([...updated]);
    }
  };

  const handlesorttitle = (type) => {
    if (type === "ATZ") {
      const updated = productdata.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        }
      });
      setproductdata([...updated]);
    } else {
      const updated = productdata.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        } else if (a.title < b.title) {
          return 1;
        } else {
          return 0;
        }
      });
      setproductdata([...updated]);
    }
  };

  const handleqty =async (id, amount) => {
   
    const payload = {
      id:id,
      type:amount
    }
    const token = localStorage.getItem("token")
    try{
      let res = await axios.post("https://organic-dl5w.onrender.com/updateQty",payload,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      // let res = await fetch("https://organic-dl5w.onrender.com/updateQty",{
      //   method:"GET",
      //   headers:{
      //     Authorization:`Bearer ${token}`
      //   },
      //   body:JSON.stringify(payload)
      // })
      // let data = await res.json();
      console.log("res is ",res);
      
      return res.data;
    }
      catch(err){
        console.log('error ',err)
        return err.response.data
      }
    }
  

  return (
    <AppContext.Provider
      value={{
        handleAddsign,
        signup,
        handleUserData,
        handlelogin,
        isAuth,
        handleAddToCart,
        cartdata,
        handleDeleteData,

        handleqty,

        handlesearch,
        productdata,
        getProductdata,
        handleTotal,
        total,
        handlesort,
        handlesorttitle,
        loading,
        handleGetAllCartData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
