const express= require('express');
const router = express.Router();
const{studentGetCourses,teacherGetCourses,getStudentInfo}= require('../controllers/getcourses');

router.get('/student',studentGetCourses);
router.get('/teacher',teacherGetCourses);
router.get('/studentlist',getStudentInfo)

module.exports= router;
