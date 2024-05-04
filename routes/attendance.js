const express= require('express');
const router = express.Router();
const{markAttendanceManually,generateQr,deleteQr,scanQr}= require('../controllers/markattendance.js')
const {isAuthStudent,isAuthTeacher} = require('../session')

router.post('/manually',markAttendanceManually);
router.post('/generateQr',generateQr);
router.post('/deleteQr',deleteQr);
router.post('/student/mark',scanQr)

module.exports= router;