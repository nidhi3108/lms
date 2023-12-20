import React, { useEffect, useState } from "react";
import { Youtube } from "react-feather";
import { NavLink, useParams } from "react-router-dom";
import Cardcourse from "../Home/Cardcourse";
const CourseDetail = () => {
  const [CoursebackendData, setCoursebackendData] = useState([]);
  const [RealtedTeacherbackendData, setRealtedTeacherbackendData] = useState([]);
  const [backendData, setBackendData] = useState([]);
  let { course_id } = useParams();
  console.log(course_id);
  const url = "http://localhost:5000/";

const showCourseDetail= async ()=>{
  const response = await fetch("http://localhost:5000/course/getCourseDetail/"+course_id);
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setCoursebackendData(data);
    // console.log(CoursebackendData.length);
    const createdBy=data.createdBy
    console.log(createdBy);
    showrelatedTeacherDetail(createdBy);
}


  const showrelatedTeacherDetail= async (createdBy)=>{
    const response = await fetch("http://localhost:5000/teacher/getrelatedTeacherDetail/"+createdBy);
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setRealtedTeacherbackendData(data);
    // console.log(RealtedTeacherbackendData.length);
  }


  const showChapter = async () => {
    const response = await fetch("http://localhost:5000/chapter/getallchapter/"+course_id);
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setBackendData(data);
    console.log(backendData.length);
  };

  useEffect(() => {
    showCourseDetail();
    showChapter();
  }, []);
  
  return (
    <>
      <div className="container mt-5 w-75">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                 src={url + CoursebackendData.thumbnail}
                 className="img-fluid mt-3"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-0">
                <h5 className="card-title">{CoursebackendData.title}</h5>
                <p className="card-text">
                 {CoursebackendData.description}
                </p>
                <p className="fw-bold">
                  Course By: <NavLink to={`/teacher-detail/${RealtedTeacherbackendData._id}`}  >{RealtedTeacherbackendData.name}</NavLink>
                </p>
                <p className="fw-bold">
                  Created At: {CoursebackendData.createdAt}
                </p>
                <p className="fw-bold">Duration: {CoursebackendData.duration}</p>
                <p className="fw-bold">Total Enrolled: 456 Students</p>
                <p className="fw-bold">Rating: 4/5</p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="row">
        <h3 className="mt-4">All Chapter</h3>
        <div className="card">
        {backendData.map((chapter) => (
    <div className="col-md-4" key={chapter._id}>

        <img
          src={url + chapter.thumbnail}
          className="card-img-top"
          style={{ height: "300px" }}
          alt="Fissure in Sandstone"
        />
        <div className="card-body">
          <p className="card-title">{chapter.title}</p>
          <p className="card-title">{chapter.description}</p>
        </div>
      </div>

  ))}

      </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
