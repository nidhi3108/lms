import React, { useEffect, useState } from "react";
import TeacherSidebar from "./TeacherSidebar";
import TeacherAddcourse from "./TeacherAddcourse"
import { Link } from "react-router-dom";

const TeacherMyCourse= () => {

   const [backendData,setBackendData]= useState([])
   const url= "http://localhost:5000/";
   
  const showCourse = async () => {
    const response = await fetch("http://localhost:5000/course/getall");
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setBackendData(data);
    console.log(backendData.length);
  }; 



  const showAllCourse=()=>{
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
            <h5 className="card-title">{data.title}</h5>
             <div className="button d-flex" >
            <Link to={"/player/"+data._id} className="btn btn-primary me-2 "style={{height: "fit-content"}}>
              View
            </Link>
            <Link to={"/teacher-addchapter"} className="btn btn-primary me-1"style={{height: "fit-content"}}>
              +Chapter
            </Link>
            </div>
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
    <TeacherSidebar/>
     </section>
    <section className="col-md-9 mt-2">
      <div className="card">
        <h5 className="card-header">My Courses</h5>
        <div className="card-body">
        <div className="row">{showAllCourse()}</div>
          {/* <table className="table border border-radius">
            <thead>
              <tr>
                <th colSpan={3}>My Courses</th>
              </tr>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Created By</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider table-divider-color">
              <tr>
                <th scope="row">PHP</th>
                <td>Nidhi Verma</td>
                <td>
                  <button className="btn btn-primary">Delete</button>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
              
    </section>
                
    </div>
    </div>
    </>
  );
};

export default TeacherMyCourse;
