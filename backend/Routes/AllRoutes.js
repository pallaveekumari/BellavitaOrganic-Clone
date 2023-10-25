const {Router} = require("express");
const { Signup, Login } = require("../Controllers/User.Controller");
const { getAllProducts } = require("../Controllers/Product.Controller");
const AllRoutes = Router()

AllRoutes.post("/signup", Signup);
AllRoutes.post("/login", Login);
AllRoutes.get("/allproducts",getAllProducts)


module.exports={
    AllRoutes
}