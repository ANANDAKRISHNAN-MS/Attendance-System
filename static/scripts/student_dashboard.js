const addLinks = ()=>{
  const links = document.querySelectorAll('.course-card a');
  const linkList = Array.from(links);

  linkList.forEach(link =>{
    link.addEventListener('click', async function(event) {
      event.preventDefault();
      linkData = link.id.split('&&');
        
      const data ={
        student_id:linkData[0],
        tcc_code : linkData[1],
        course_code : linkData[2],
        course_name : linkData[3],
      }

      const res = await axios.post('/profile/course/student',data);

      const newWindow = window.open('/course.html','_blank')

        newWindow.onload = function(){
        newWindow.document.write(res.data);
        newWindow.document.close()
      }

  })})
}
const getCourse= async()=>{
try {
const student = document.getElementsByClassName('card-title')[0];
const cardContent = document.querySelector('.card-content');
const res = await axios.get('/courses/student',{
    params:{
        id:student.id
    }
})
const List = res.data.list;
if(List.length===0){
    const noCourse = `<div class="course-card">
    <div class="course-card-content">
      <div class="course-info">
        <h3 class="course-title">Currently You Are Not Taking Any Courses</h3>
      </div>
    </div>
  </div>`
  cardContent.innerHTML = noCourse
}
else{
    const courseList= List.map(item=>{
        const{student_id,tcc_code,course_code,course_name} = item;
        return `<div class="course-card">
        <div class="course-card-content">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <div class="course-info">
            <h3 class="course-title">${course_code}</h3>
            <p class="course-description">${course_name}</p>
          </div>
          <a href="" id="${student_id}&&${tcc_code}&&${course_code}&&${course_name}" class="view-link"><p>View</p><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4 peer-[margin-inline-start] translate-y-0.5"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg></a>
        </div>
      </div>`
    }).join('');
    cardContent.innerHTML = courseList; 

  }

  addLinks()


} catch (error) {
console.log(error);
}
}

function loadScript(url) {
var script = document.createElement('script');
script.src = url;
script.async = true; // This makes the script load asynchronously
document.head.appendChild(script);
}

document.addEventListener('DOMContentLoaded',function(){

loadScript('https://unpkg.com/axios/dist/axios.min.js');

getCourse();
})