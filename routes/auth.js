const express= require('express');
const router = express.Router();
const{studentValidate,teacherValidate}= require('../controllers/validate.js')

router.get('/student',studentValidate);
router.get('/teacher',teacherValidate);

module.exports= router;
