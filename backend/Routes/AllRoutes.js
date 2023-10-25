const {Router} = require("express")
const AllRoutes = Router()

AllRoutes.post("/signup", Signup);
AllRoutes.post("/login", Login);


module.exports={
    AllRoutes
}