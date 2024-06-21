const express=require('express')
const router=express.Router()

router.get('/getBookingsOfUser')
router.get('/getBookingDetails/:bookingId')
router.get('/getBookingsOfBus')
router.post('/postBooking')
router.get('/calculateBookingCost')
router.delete('/cancelBoking')
router.put('/updateBooking')

module.exports=router