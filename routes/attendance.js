const express= require('express');
const router = express.Router();
const{markAttendanceManually}= require('../controllers/markattendance.js')

router.post('/manually',markAttendanceManually);

module.exports= router;