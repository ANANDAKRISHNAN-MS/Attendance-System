const pool = require('../database');
const studentGetCourses = async (req,res)=>{
    
}
const teacherGetCourses = async (req,res)=>{
    const {id}=req.query;
    try {
        const user = await pool.query('SELECT tcc_code,course_code,course_name FROM  \"Attendence_System\".tcc_table natural join \"Attendence_System\".course WHERE teacher_id = $1', [id]);
        res.status(200).json({list:user.rows});
    } catch (error) {
        console.log(error);
    }
}
module.exports = {studentGetCourses,teacherGetCourses}