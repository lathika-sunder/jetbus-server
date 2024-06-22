const express = require('express')
const router = express.Router()
const { getUsers,signupUser,loginUser,logoutUser,editUserDetails,getUserDetails } = require('../controllers/userController')
const verifyToken = require('../middleware/verifyToken')

router.get("/getUsers", getUsers)
router.post("/login",loginUser)
router.get('/logout',verifyToken,logoutUser)
router.post('/signup',signupUser)
router.put('/editUserDetails/:userId',verifyToken,editUserDetails)
router.get('/getUserDetails/:userId',verifyToken,getUserDetails)

module.exports = router