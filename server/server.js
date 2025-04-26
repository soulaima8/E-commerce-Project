const express = require("express")
const app = express()
require("dotenv").config()
var cors = require('cors')

 
app.use(cors())
app.use(express.json())

//routes configuration 
app.use("/api/user", require("./routes/userRoutes"))

//database connection 
const connectDB = require("./config/connectDB")
connectDB()

//port connection 
 const port = process.env.PORT
 app.listen(port , ()=> console.log("my server is running on port :",port))