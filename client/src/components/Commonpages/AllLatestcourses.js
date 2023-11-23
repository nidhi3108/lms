import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import Cardcourse from '../Home/Cardcourse'
const AllLatestcourses = (props) => {

  const url = "http://localhost:5000/";
const [backendData, setBackendData] = useState([]);



const showAllCourse= async ()=> {
    const response = await fetch("http://localhost:5000/course/getallcourse");
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setBackendData(data);
    console.log(backendData.length);
}

// const showAllTeacher = async ()=>{
//   const response = await fetch("http://localhost:5000/teacher/getallTeacher");
//   console.log(response.status);
//   const data = await response.json();
//   console.log(data);
//   setbackendTeacherData(data);
//   console.log(setbackendTeacherData.length);
// }


useEffect(()=>{
    showAllCourse();
    // showAllTeacher();
},[]) 

  return (
    <>
    <div className="container mt-4">
     <h3>Latest Courses</h3> 
        <div className="row">
        {backendData.map(
                (data)=>{return  <Cardcourse  title={data.title} description={data.description} img={url+data.thumbnail}/>}
                )}
        </div>
             {/* pagination */}
             <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item">
      <a className="page-link" href="#">
        Previous
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        1
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        2
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        3
      </a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">
        Next
      </a>
    </li>
  </ul>
</nav>

    </div>
    </>
  )
}
  export default AllLatestcourses