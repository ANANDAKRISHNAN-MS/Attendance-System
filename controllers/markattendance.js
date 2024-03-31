const pool = require('../database');

const markAttendanceManually = async (req,res)=>{
    try {
        const {tcc_code,date,period,attendanceData}=req.body;
        attendanceData.forEach(async data => {
           try {
            const result = await pool.query("INSERT into \"Attendence_System\".attendence VALUES ($1,$2,$3,$4,$5)", [tcc_code,data[0],date,period,data[1]]);
           } catch (error) {
            console.log(error.constraint);
           }
        });
        res.status(200).send('Attendance Marked Succesfully');
    }catch(error){
        console.error(error)
    }
   
}

const generateQr = async (req,res)=>{
    try {
        
        const {uniqueId,tcc_code}=req.body;
        const result = await pool.query("INSERT into \"Attendence_System\".qr_table(qr_id) VALUES ($1)",[uniqueId]);
        
        res.status(200).send();
    }catch(error){
        console.error(error)
    }
   
}

const deleteQr = async (req,res)=>{
    try {
        const {uniqueId,tcc_code}=req.body;
        const result = await pool.query("DELETE FROM \"Attendence_System\".qr_table WHERE qr_id=$1",[uniqueId]);
        res.status(200).send();
    }catch(error){
        console.error(error)
    }
   
}
module.exports = {markAttendanceManually,generateQr,deleteQr}