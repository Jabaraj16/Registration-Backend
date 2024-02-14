const express=require('express')
const studentController=require('../Controller/studentController')
const router=express.Router()


router.post('/register',studentController.student)
router.get('/studentlist',studentController.getStudent)
module.exports=router