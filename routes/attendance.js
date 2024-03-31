const express= require('express');
const router = express.Router();
const{markAttendanceManually,generateQr,deleteQr}= require('../controllers/markattendance.js')

router.post('/manually',markAttendanceManually);
router.post('/generateQr',generateQr);
router.post('/deleteQr',deleteQr);

module.exports= router;