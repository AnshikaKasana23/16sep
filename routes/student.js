const express = require('express');
const StudentController = require('../controllers/student.controller');
const router = express.Router();

router.post('/add/user',(req,res)=>{
    StudentController.addStudent(req,res)

})
router.get('/users',(req,res)=>{
    StudentController.getStudents(req,res)
})

module.exports = router