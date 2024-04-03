document.addEventListener('DOMContentLoaded', function() {
    const StudentLoginForm = document.getElementById('form');
    const studentId = document.getElementById('studentId');
    const password = document.getElementById('password');
    const errorMsg = document.getElementById('error-message');

    const validate = async () => {
        try{
            const result = await axios.get('/api/validate/student', {
                params: {
                    id: studentId.value,
                    pass: password.value
                }
            });
            errorMsg.innerText=result.data;
            errorMsg.style.border='1.5px solid #66FF00';
            errorMsg.style.color='#008080';
            errorMsg.style.display='block';
            
            setTimeout(async ()=>{
                const data={id:studentId.value};
                const studentData = await axios.post('/profile/student',data);
                document.open('text/html', 'replace');
                document.write(studentData.data);
                document.close();
            },1000)
        }
        catch(error){
            errorMsg.innerText=error.response.data;
            errorMsg.style.border='1.5px solid red';
            errorMsg.style.color='#FF004F';
            errorMsg.style.display='block'; 
        }
    }

    StudentLoginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        errorMsg.style.display='none';
        if(studentId.value.trim()==="" || password.value.trim()===""){
            errorMsg.innerText="Fill All The Corresponding Fields";
            errorMsg.style.border='1.5px solid red';
            errorMsg.style.color='#FF004F';
            errorMsg.style.display='block';
            studentId.value = "";
            password.value = "";
            return;
        }
        else{
            validate();
        }
    });
});
