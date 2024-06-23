const express=require('express')
const { postBooking,getBookingsOfUser,getBookingDetails, calculateBookingCost,cancelBooking,updateBooking } = require('../controllers/bookingsContoller')
const verifyToken = require('../middleware/verifyToken')
const router=express.Router()

router.get('/getBookingsOfUser',verifyToken,getBookingsOfUser)
router.get('/getBookingDetails/:bookingId',getBookingDetails)
router.post('/postBooking',verifyToken,postBooking)
router.get('/calculateBookingCost',calculateBookingCost)
router.delete('/cancelBooking',cancelBooking)
router.put('/updateBooking',updateBooking)

module.exports=router