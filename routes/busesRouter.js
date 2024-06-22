const express=require('express')
const router=express.Router()
const {
    getBuses,
    getSeats,
    postBus,
    editBus,
    deleteBus,
    getBusDetails,
    filterBuses
}=require('../controllers/busesController')
const verifyToken = require('../middleware/verifyToken')

router.get('/getSeats',getSeats)
router.get('/getBuses',getBuses)
router.get('/filterBuses',filterBuses)
router.post('/postBus',verifyToken,postBus)
router.delete('/deleteBus',deleteBus)
router.put('/editBus',editBus)
router.get('/getBusDetails/:busId',getBusDetails)

module.exports=router