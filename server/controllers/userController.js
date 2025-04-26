const User = require("../models/userSchema")
const Product = require("../models/productSchema")
const Order = require("../models/orderSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")




const register = async(req,res)=>{
    try{
    const {name,email,password}= req.body
    const newuser = await User.findOne({email})
        if (newuser) res.status(400).json({msg:"user already exist, try to login!"})
    else {
        const hashedPW= await bcrypt.hash(password,10)
        const createUser = await User.create({name,email, password:hashedPW}) 
        const token = jwt.sign({id:createUser._id}, process.env.JWT_SECRET, {expiresIn:"7d"})
        res.status(201).json({msg:"user created", token:token, user:createUser})
}
    } 
    catch(error){
        res.status(500).json({msg:"something went wrong /register", error:error.message})

    }
}


const login = async(req,res)=>{
    try{
        const {email,password}= req.body
        const userExist = await User.findOne({email})
            if (!userExist) res.status(400).json({msg:"user does not exist try to register!"})
        else{
            const checkPW = await bcrypt.compare(password, userExist.password)
            if(!checkPW) res.status(404).json({msg:"wrong password try again !"})
            const token = jwt.sign({id:userExist._id}, process.env.JWT_SECRET, {expiresIn:"7d"})
            res.status(201).json({msg:"login success", token:token, user:userExist})

        }
    } 
    catch(error){
        res.status(500).json({msg:"something went wrong /login", error:error.message})

    }
}


 const getUserData = async(req,res)=>{
    try{
        const user = await User.findOne({_id:req.userId})
        if(!user)
            res.status(400).json({msg:"user does not exist try to register!" })
        else{
            res.status(200).json({msg:"user info success!", user:user})
        }
        
    }
    catch(error){
        res.status(500).json({msg:"something went wrong /getUserData", error:error.message})

    }
 }

 const getPorduct = async(req,res)=>{
    try{
        const products = await Product.find()
        res.status(200).json({msg:"get all products ", products})

    }
    catch(error){
        res.status(500).json({msg:"something went wrong /getPorduct", error:error.message})

    }

 }

 const createOrder = async(req,res)=>{
    try{
        const {userId,productList}= req.body
        const newOrder = await Order.create({products: productList,owner:userId})
        res.status(201).json({msg:"send Orders!", newOrder})
    }
    catch(error){
        res.status(500).json({msg:"something went wrong /createOrder", error:error.message})

    }
 }

const getUserOrders = async(req,res)=>{
    try{
        const {userId}= req.body
        const userOrder = await Order.find({owner:userId})
        res.status(200).json({msg:"Get all orders", userOrder})

    }
    catch(error){
        res.status(500).json({msg:"something went wrong /getUserOrders", error:error.message})

    }
}


const addProduct = async(req,res)=>{
    try{

        const{name,description,price,poster}= req.body
        const newProduct = await Product.create(req.body)
        res.status(201).json({msg:"product created", product: newProduct})

    }
    catch(error){
        res.status(500).json({msg:"something went wrong /addProduct", error:error.message})

    }
}



module.exports={register,login,getUserData,getPorduct,createOrder,getUserOrders,addProduct}