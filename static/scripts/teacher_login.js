document.addEventListener('DOMContentLoaded', function() {
    const TeacherLoginForm = document.getElementById('form');
    const teacherId = document.getElementById('teacherId');
    const password = document.getElementById('password');
    const errorMsg = document.getElementById('error-message');

    const validate = async () => {
        try{
            const result = await axios.get('/api/validate/teacher', {
                params: {
                    id: teacherId.value,
                    pass: password.value
                }
            });
            errorMsg.innerText=result.data;
            errorMsg.style.border='1.5px solid #66FF00';
            errorMsg.style.color='#008080';
            errorMsg.style.display='block'; 
        }
        catch(error){
            errorMsg.innerText=error.response.data;
            errorMsg.style.border='1.5px solid red';
            errorMsg.style.color='#FF004F';
            errorMsg.style.display='block'; 
        }
    }

    TeacherLoginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        errorMsg.style.display='none';
        if(teacherId.value.trim()==="" || password.value.trim()===""){
            errorMsg.innerText="Fill All The Corresponding Fields";
            errorMsg.style.border='1.5px solid red';
            errorMsg.style.color='#FF004F';
            errorMsg.style.display='block';
            teacherID.value = "";
            password.value = "";
            return;
        }
        else{
            validate();
        }
    });
});
