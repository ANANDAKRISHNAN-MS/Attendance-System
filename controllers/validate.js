const pool = require('../database');
const studentValidate = async (req,res)=>{
    const {id,pass}=req.query;
    try {
        const result = await pool.query("SELECT * FROM \"Attendence_System\".student_credentials WHERE student_id=$1 and password=$2", [id,pass]);
        if(result.rowCount===0){
            return res.status(401).send("Invalid Credentials");
        }
        req.session.isAuthStudent=true;
        req.session.studentId=id
        return res.status(200).send("Login Succesfull");
      } catch (err) {
        console.error(err);
      }
}
const teacherValidate = async (req,res)=>{
    const {id,pass}=req.query;
    try {
        const result = await pool.query("SELECT * FROM \"Attendence_System\".teacher_credentials WHERE teacher_id=$1 and password=$2", [id,pass]);
        if(result.rowCount===0){
            return res.status(401).send("Invalid Credentials");
        }
        req.session.isAuthTeacher=true;
        req.session.teacherId=id;
        return res.status(200).send("Login Succesfull");
      } catch (err) {
        console.error(err);
      } 
}
module.exports = {studentValidate,teacherValidate}