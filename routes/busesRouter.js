const express = require('express')
const router = express.Router()
const {
    getBuses,
    getSeats,
    postBus,

    getBusDetails
} = require('../controllers/busesController')
const verifyToken = require('../middleware/verifyToken')

router.get('/getSeats', getSeats)
router.get('/getBuses', getBuses)
router.post('/postBus', verifyToken, postBus)
router.get('/getBusDetails/:busId', getBusDetails)

module.exports = router