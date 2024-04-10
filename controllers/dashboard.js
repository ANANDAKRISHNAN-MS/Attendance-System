const pool = require('../database');
const studentDashboard = async (req,res)=>{
    const {id}=req.body;
    try {
        const user = await pool.query('SELECT student_id,name,semester,class FROM  \"Attendence_System\".student_details natural join \"Attendence_System\".class WHERE student_id = $1', [id]);
        return res.status(201).render('student_dashboard',{student:user.rows[0]});
    } catch (error) {
        console.log(error);
    }
}
const teacherDashboard = async (req,res)=>{
    const {id}=req.body;
    try {
        const user = await pool.query('SELECT * FROM  \"Attendence_System\".teacher_details WHERE teacher_id = $1', [id]);
        return res.status(201).render('teacher_dashboard',{teacher:user.rows[0]});
    } catch (error) {
        console.log(error);
    }
}

const courseDashboardTeacher = async (req,res)=>{

    return res.status(201).render('coursedashboard_teacher',{teacher:req.body});
}
const courseDashboardStudent = async (req,res)=>{
    return res.status(201).render('coursedashboard_student',{student:req.body});
}

module.exports = {studentDashboard,teacherDashboard,courseDashboardTeacher,courseDashboardStudent}