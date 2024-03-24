const pool = require('../database');
const studentDashboard = async (req,res)=>{
    
}
const teacherDashboard = async (req,res)=>{
    const {id}=req.query;
    try {
        const user = await pool.query('SELECT * FROM  \"Attendence_System\".teacher_details WHERE teacher_id = $1', [id]);
        return res.status(300).render('teacher_dashboard',{teacher:user.rows[0]});
    } catch (error) {
        console.log(error);
    }
}
module.exports = {studentDashboard,teacherDashboard}