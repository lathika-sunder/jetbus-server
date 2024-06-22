const express = require('express')
const router = express.Router()
const { getUsers,signupUser,loginUser,logoutUser,editUserDetails,getUserDetails } = require('../controllers/userController')

router.get("/getUsers", getUsers)
router.post("/login",loginUser)
router.post('/logout',logoutUser)
router.post('/signup',signupUser)
router.post('/editUserDetails',editUserDetails)
router.post('/getUserDetails/:userId',getUserDetails)

module.exports = router