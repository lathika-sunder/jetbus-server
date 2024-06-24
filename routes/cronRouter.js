const express=require('express')
const cronInitiatedOrders = require('../services/cronInitiatedOrders')
const router=express.Router()

router.get('/',cronInitiatedOrders)

module.exports=router