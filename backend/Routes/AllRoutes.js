const {Router} = require("express");
const { Signup, Login } = require("../Controllers/User.Controller");
const AllRoutes = Router()

AllRoutes.post("/signup", Signup);
AllRoutes.post("/login", Login);



module.exports={
    AllRoutes
}