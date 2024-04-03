const express= require('express');
const router = express.Router();
const{studentDashboard,teacherDashboard,courseDashboardTeacher}= require('../controllers/dashboard.js')

router.post('/student',studentDashboard);
router.post('/teacher',teacherDashboard);
router.post('/course/teacher',courseDashboardTeacher)

module.exports= router;
