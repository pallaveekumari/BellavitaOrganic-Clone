import React, { useContext, useState } from "react";
import style from "../Styles/Login.module.css";
import {
  Heading,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const init = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginData, setloginData] = useState(init);
  const { handlelogin } = useContext(AppContext);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setloginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <div>
      <Navbar />

      <Box className={style.logos}>
        <Box className={style.logobox}>
          <img
            className={style.logoimg}
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BV0_500_x_500_V3_480x.png?v=1653046371"
            alt=""
          />
        </Box>
        <Box className={style.logobox}>
          <img
            className={style.logoimg}
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_500_x_500_V3_480x.png?v=1653046388"
            alt=""
          />
        </Box>
        <Box className={style.logobox}>
          <img
            className={style.logoimg}
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721"
            alt=""
          />
        </Box>
      </Box>

      <Box className={style.container}>
        <Heading fontWeight="medium">Login</Heading>
        <Box className={style.email}>
          <Input
            className={style.name}
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            h={"100%"}
          />
        </Box>
        <Box className={style.pass}>
          <InputGroup size="md" className={style.input}>
            <Input
              // pr='4.5rem'
              h={"100%"}
              className={style.name}
              onChange={handleChange}
              name="password"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <button className={style.forget}>Forget your password?</button>
        </Box>
        <Box>
          <button
            onClick={async () => {
              let res = await handlelogin(loginData);
              if (res.status) {
                alert(res.msg);
                localStorage.setItem("token", res.token);
                navigate("/");
              } else {
                alert(res.msg);
              }
            }}
            className={style.signbtn}
          >
            Sign in
          </button>
        </Box>
        <Box>
          <Link to="/signup">
            <button className={style.account}>Create account</button>
          </Link>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Login;
