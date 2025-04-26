const router = require("express").Router()
const {register,login,getUserData,getPorduct,createOrder,getUserOrders,addProduct}= require("../controllers/userController")
const {userMiddleware} = require("../middleware/userMiddleware")
router.post("/register", register)
router.post("/login", login)
router.get("/getuserdata",userMiddleware, getUserData)
router.get("/getproducts", getPorduct)
router.post("/createorder", userMiddleware,createOrder)
router.get("/getuserorders",userMiddleware, getUserOrders)
router.post("/addproduct", addProduct)


module.exports= router