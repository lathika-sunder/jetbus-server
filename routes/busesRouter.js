const express=require('express')
const router=express.Router()

router.get('/getSeats')
router.get('/getBuses')
router.get('/filterBuses')
router.post('/postBus')
router.delete('/deleteBus')
router.put('/editBus')
router.get('/getBusDetails/:busId')

module.exports=router