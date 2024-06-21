const express=require('express')
const router=express.Router()

router.post('/postOperator')
router.get('/getOperators')
router.get('/getOperatorDetails/:operatorId')
router.put('/updateOperator')

module.exports=router