import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
// import Cardcourse from '../Home/Cardcourse'
import CardPopularTeachercourse from '../Home/CardPopularTeacher'


const AllLatestTeacher = (props) => {


  const url = "http://localhost:5000/";
  const [backendTeacherData, setbackendTeacherData] = useState([])

const showAllTeacher = async ()=>{
  const response = await fetch("http://localhost:5000/teacher/getallTeacher");
  console.log(response.status);
  const data = await response.json();
  console.log(data);
  setbackendTeacherData(data);
  console.log(setbackendTeacherData.length);
}


  useEffect(()=>{
    showAllTeacher();
},[]) 
  return (
    <>
    <div className="container mt-4">
     <h3>Popular Teachers</h3> 
     <div className="row">
     {backendTeacherData.map(
                (data)=>{return  <CardPopularTeachercourse  title={data.name} description={data.description} img={url+data.thumbnail} id={data._id}/>}
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
  export default AllLatestTeacher