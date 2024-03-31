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

const getStudentInfo = async (req,res)=>{
    const {tcc_code}=req.query;
    try {
        const students = await pool.query('SELECT student_id,name,semester,class FROM  \"Attendence_System\".student_details natural join \"Attendence_System\".class WHERE class_code = (SELECT class_code FROM  \"Attendence_System\".tcc_table WHERE tcc_code = $1)', [tcc_code])
       
        if(students.rowCount===0){
            const course = await pool.query('SELECT semester,class FROM  \"Attendence_System\".class WHERE class_code = (SELECT class_code FROM  \"Attendence_System\".tcc_table WHERE tcc_code = $1)', [tcc_code])
        
            const studentList = {
                className : course.rows[0].class, 
                semester : course.rows[0].semester,
                totalPeriod:0,
                names:"No students are currently in the Course"
            }
            return res.status(200).json({studentList:studentList});
        }
        else{
            const attendence = await pool.query('SELECT student_id,attend FROM  \"Attendence_System\".attendence  WHERE  tcc_code = $1' , [tcc_code]);
        
            if(attendence.rowCount===0){
                const studentList = {
                    className : students.rows[0].class, 
                    semester : students.rows[0].semester,
                    totalPeriod:0,
                    names:
                    students.rows.map(row=>{
                        return [row.student_id,row.name,0];
                    })
                }
                return res.status(200).json({studentList:studentList});
            }
            else{
                const totalPeriod =  await pool.query('SELECT COUNT(*) FROM  \"Attendence_System\".attendence  WHERE  tcc_code = $1 GROUP BY student_id' , [tcc_code]);
            
                const studentList = {
                    className : students.rows[0].class, 
                    semester : students.rows[0].semester,
                    totalPeriod:totalPeriod.rows[0].count,
                    names:
                     students.rows.map(row=>{
                        let count=0;
                        attendence.rows.forEach(student=>{
                            if((row.student_id===student.student_id)&&(student.attend==='P')){
                                count++;
                            }
                        })
                     return [row.student_id,row.name,count];
                        })
                    };
                return res.status(200).json({studentList:studentList});
                }
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = {studentGetCourses,teacherGetCourses,getStudentInfo}