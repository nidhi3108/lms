import React, { useEffect, useState } from "react";
import { Youtube } from "react-feather";
import { NavLink, useParams } from "react-router-dom";
import Cardcourse from "../Home/Cardcourse";
import { baseUrl } from "../../utils/constants";

const CourseDetail = () => {
  const [CoursebackendData, setCoursebackendData] = useState([]);
  const [RealtedTeacherbackendData, setRealtedTeacherbackendData] = useState(
    []
  );
  const [backendData, setBackendData] = useState([]);
  let { course_id } = useParams();
  console.log(course_id);


  const showCourseDetail = async () => {
    const response = await fetch(
      `${baseUrl}/course/getCourseDetail/` + course_id
    );
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setCoursebackendData(data);
    // console.log(CoursebackendData.length);
    const createdBy = data.createdBy;
    console.log(createdBy);
    showrelatedTeacherDetail(createdBy);
  };

  const showrelatedTeacherDetail = async (createdBy) => {
    const response = await fetch(
      `${baseUrl}/teacher/getrelatedTeacherDetail/` + createdBy
    );
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setRealtedTeacherbackendData(data);
    // console.log(RealtedTeacherbackendData.length);
  };

  const showChapter = async () => {
    const response = await fetch(
      `${baseUrl}/chapter/getallchapter/` + course_id
    );
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
      <div className="container mt-5 w-100">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={baseUrl + CoursebackendData.thumbnail}
                className="img-fluid mt-3"
              />
            </div>
            <div className="col-md-8 mt-3">
              <div className="card-body p-0">
                <h5 className="card-title">{CoursebackendData.title}</h5>
                <p className="card-text">{CoursebackendData.description}</p>
                <p className="fw-bold">
                  Course By:{" "}
                  <NavLink
                    to={`/teacher-detail/${RealtedTeacherbackendData._id}`}
                  >
                    {RealtedTeacherbackendData.name}
                  </NavLink>
                </p>
                <p className="fw-bold">
                  Created At: {CoursebackendData.createdAt}
                </p>
                <p className="fw-bold">
                  Duration: {CoursebackendData.duration}
                </p>
                <p className="fw-bold">Total Enrolled: 456 Students</p>
                <p className="fw-bold">Rating: 4/5</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="container">
          <h3 className="mt-4">All Chapter</h3>
          <div className="row">
            {backendData.map((chapter) => (
              <div className="col-md-4" key={chapter._id}>
                          <div className="card">
                <NavLink className="mt-2 ms-4" to={chapter.youtubeURL} target="_blank">
                  Click Here To Start Chapter
                </NavLink>
                <div className="card-body">
                  <p className="card-title ">Title: {chapter.title}</p>
                  <p className="card-title mt-1">Description: {chapter.description}</p>
                </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
