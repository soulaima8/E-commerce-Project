const jwt = require("jsonwebtoken")


module.exports.userMiddleware= async(req,res,next)=>{
    try{
        const token = req.headers.token
        if(!token)
            res.status(401).json.userMiddleware({msg:"your are not authorized!"})
        else{
            const verifyToken= jwt.verify(token, process.env.JWT_SECRET)
            req.userId = verifyToken.id
            next()
        }
    }
    catch(error){
        res.status(500).json({msg:"something went wrong / userMiddleware", error:error.message})
    }
}