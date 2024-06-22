const jwt=require('jsonwebtoken')
const config=require('../config/config')
const User = require('../models/userModel')
const SECRET_KEY=config.jwt.secret_key


const generateToken=(id,email,role)=>{
   const token= jwt.sign(SECRET_KEY,{
        id:id,
        email:email,
        role:role,
    },{expiresIn:'30m'})
    return token
}

module.exports=generateToken