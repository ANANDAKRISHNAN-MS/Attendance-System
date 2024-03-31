// 1 2024-03-31 2 [ [ '001/21', 'P' ], [ '007/21', 'A' ] ]
const pool = require('../database');

const month = {
    '01':'JAN',
    '02':'FEB',
    '03':'MAR',
    '04':'APR',
    '05':'MAY',
    '06':'JUN',
    '07':'JUL',
    '08':'AUG',
    '09':'SEP',
    '10':'OCT',
    '11':'NOV',
    '12':'DEC',
}
const markAttendanceManually = async (req,res)=>{
    try {
        const {tcc_code,date,period,attendanceData}=req.body;
        attendanceData.forEach(async data => {
            const result = await pool.query("INSERT into \"Attendence_System\".attendence VALUES ($1,$2,$3,$4,$5)", [tcc_code,data[0],date,period,data[1]]);
        });
        res.status(200).send('Attendance Marked Succesfully');
    } catch (error) {
        console.log(error);
    }
   
}
module.exports = {markAttendanceManually}