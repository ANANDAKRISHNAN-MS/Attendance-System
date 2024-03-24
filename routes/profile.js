const express= require('express');
const router = express.Router();
const{studentDashboard,teacherDashboard}= require('../controllers/dashboard.js')

router.get('/student',studentDashboard);
router.get('/teacher',teacherDashboard);

module.exports= router;
