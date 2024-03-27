const params = window.location.search
const id = new URLSearchParams(params).get('id')
const code = new URLSearchParams(params).get('code')
const name = new URLSearchParams(params).get('name')

const getInfo = async ()=>{
    try{
        const res = await axios.get('/courses/studentlist',{
            params:{
                tcc_code:id
            }
        });
    }
    catch(error){
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded',function(){ 
    const courseCode = document.getElementById('courseCode');
    const courseName = document.getElementById('courseName');   
    courseCode.innerHTML=code;
    courseName.innerHTML=name;
    getInfo();
})