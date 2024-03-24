const express= require('express');
const router = express.Router();
const{studentGetCourses,teacherGetCourses}= require('../controllers/getcourses');

router.get('/student',studentGetCourses);
router.get('/teacher',teacherGetCourses);

module.exports= router;
