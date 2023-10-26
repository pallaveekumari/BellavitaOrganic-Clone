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
    let totalprice = cartdata.reduce((sum, el) => {
      return sum + el.price * el.qty;
    }, 0);
    setTotal(totalprice);
  };

  const handleAddsign = async (signupdata) => {
    //  setsignup([...signup,signupdata])

    try {
      let res = await axios.post("http://localhost:8000/signup", signupdata);
      return res.data.msg;
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
      let res = await axios.post("http://localhost:8000/login", payload);
      return res.data.msg;
    } catch (err) {
      console.log("error", err);
      return  err.response.data
    }
  };
  const handleGetAllCartData = async () => {
    try {
      let token = localStorage.getItem("token");
      let data = await axios.get("http://localhost:8000/getcartdata", {
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
      let data = await axios.post("http://localhost:8000/addtocart", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("data",data);
     
        return data.data;
      
    } catch (err) {

      console.log("error", err);
      return err.response.data
    }
  };

  const handleDeleteData = async(id) => {
   try{
    let token = localStorage.getItem("token");
    let data=await axios.get(`http://localhost:8000/removecartdata/${id}`,{
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
    axios
      .get(`https://bellavita-organic.herokuapp.com/productpage?q=${query}`)
      .then((res) => setproductdata(res.data));
  };

  const getProductdata = () => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/allproducts`)

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

  const handleqty = (id, amount) => {
    let updatedData = cartdata.map((el) => {
      if (el.id == id) {
        return {
          ...el,
          qty: el.qty + amount,
        };
      } else {
        return el;
      }
    });
    setcartdata(updatedData);
  };

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
        handleqty,
        loading,
        handleGetAllCartData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
