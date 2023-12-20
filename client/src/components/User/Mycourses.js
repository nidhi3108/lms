import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Trash2 } from 'react-feather';
import { NavLink } from 'react-router-dom'


const Mycourses = () => {
  const [currentStudent, setcurrentStudent] = useState(JSON.parse(sessionStorage.getItem('currentStudent')))
// console.log(currentStudent);
const id = currentStudent._id
// console.log(id);
  const [backendData,setBackendData]= useState([])
   const url= "http://localhost:5000/";
  const showCourse = async () => {
    const response = await fetch("http://localhost:5000/course/getallstudentenrolledcourse/" + id);
    console.log(response.status);
    const data = await response.json();
    // console.log(data);
    // setBackendData(data);
    // console.log(backendData.length);
    // console.log("studentenrolledocourses");


   showAllenrolledcoursebyid(data);
  }; 

  // const showAllenrolledcoursebyid= async (data)=>{
  //   // console.log(data[0].enrolledCourses);
  //   const allenrolledid=data[0].enrolledCourses
  //   const detailedData= allenrolledid.map(async  (id)=>{
  //     const response = await fetch("http://localhost:5000/course/getalldataofenrolledcourse/" + id);
  //     console.log(response.status);
  //     const enrolleddata = await response.json();
  //     console.log(enrolleddata);
    
  //     // // console.log("studentenrolledocourses");
  //   }
  //   )
  //   setBackendData(detailedData);
  //   console.log(backendData.length);
  //   console.log(backendData);
  //   console.log(detailedData);
  // }
  
  // using async/await directly inside a map function might not work as expected, as map doesn't 
  // inherently await each iteration. However, you can combine map with Promise.all to achieve a 
  // similar effect, executing asynchronous operations for each item in parallel. 
  const showAllenrolledcoursebyid = async (data) => {
    const allenrolledid = data[0].enrolledCourses;
    const detailedData = await Promise.all(
      allenrolledid.map(async (id) => {
        const response = await fetch("http://localhost:5000/course/getalldataofenrolledcourse/" + id);
        if (response.status === 200) {
          return response.json();
        }
        return null; // Handle error condition or return appropriate value
      })
    );
  
    setBackendData(detailedData.filter(Boolean));
  };


  const showAllStudentEnrolledCourse=()=>{
    console.log("user ne jisme enroll kia that courses'id aagyi");
    return backendData.map((data) => (
      <div className="col-md-4">
        <div className="card">
          <img 
            src={url+data.thumbnail}
            className="card-img-top"
            style={{height:"300px"}}
            alt="Fissure in Sandstone"
          />
          <div className="card-body">
            <p className="card-title">{data.title}</p>
            <p className="card-title">{data.description}</p>
            <NavLink to={`/coursedetail/${data._id}`}  className="btn btn-primary mt-3">
              Read More
            </NavLink>
            <NavLink to="#"  className="btn btn-success mt-3">
              Unenroll
            </NavLink>
          </div>
        </div>
      </div>
    ));
  }

  useEffect(()=>{
    showCourse();
   },[])
  return (
    <>
    <div className="container">
        <div className="row">
     <section className="col-md-3">
    <Sidebar/>
     </section>
    <section className="col-md-9 mt-2">
    <h5 className="card-header">My Courses</h5>
        <div className="card-body">
        <div className="row">{showAllStudentEnrolledCourse()}</div>
        </div>
    </section>
    </div>
    </div>
    </>
  );
};

export default Mycourses;
