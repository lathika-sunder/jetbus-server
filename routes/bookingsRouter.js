const express=require('express')
const { postBooking,getBookingsOfUser } = require('../controllers/bookingsContoller')
const verifyToken = require('../middleware/verifyToken')
const router=express.Router()

router.get('/getBookingsOfUser',verifyToken,getBookingsOfUser)
router.get('/getBookingDetails/:bookingId')
router.get('/getBookingsOfBus/:busId')
router.post('/postBooking',verifyToken,postBooking)
router.get('/calculateBookingCost')
router.delete('/cancelBoking')
router.put('/updateBooking')

module.exports=router