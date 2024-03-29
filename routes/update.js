const express= require('express');
const router = express.Router();
const{addCourse}= require('../controllers/addcourses.js')

router.post('/course',addCourse);

module.exports= router;