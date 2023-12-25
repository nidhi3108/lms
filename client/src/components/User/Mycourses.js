import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Trash2 } from "react-feather";
import { NavLink } from "react-router-dom";

const Mycourses = () => {

  // const [enrolled, setEnrolled] = useState();

  const [currentStudent, setcurrentStudent] = useState(
    JSON.parse(sessionStorage.getItem("currentStudent"))
  );
  // console.log(currentStudent);
  const id = currentStudent._id;
  // console.log(id);
  const [backendData, setBackendData] = useState([]);
  const url = "http://localhost:5000/";
  const showCourse = async () => {
    const response = await fetch(
      "http://localhost:5000/course/getallstudentenrolledcourse/" + id
    );
    console.log(response.status);
    const data = await response.json();
    //all id fetched of enrolled courses
    console.log(data);
    console.log(data.length);

    showAllenrolledcoursebyeachid(data);
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
  const showAllenrolledcoursebyeachid = async (data) => {
    if (data.length != 0) {
      const allenrolledid = data[0].enrolledCourses;
      const detailedData = await Promise.all(
        allenrolledid.map(async (id) => {
          const response = await fetch(
            "http://localhost:5000/course/getalldataofenrolledcourse/" + id
          );
          if (response.status === 200) {
            return response.json();
          }
          return null; // Handle error condition or return appropriate value
        })
      );
      // fetched all details of each course by it's id
      console.log(detailedData);
      setBackendData(detailedData.filter(Boolean));
    } else {
      console.log("No enrolled courses");
    }
  };

  const showAllStudentEnrolledCourse = () => {
    console.log(
      "user ne jisme enroll kia that courses'id se unka sara data aagyi"
    );
    console.log(backendData);
    if (backendData != 0) {
      return backendData.map((data) => (
        <div className="col-4 mt-3 ">
          <div className="card">
            <img
              src={url + data.thumbnail}
              className="card-img-top"
              style={{ height: "300px" }}
              alt="Fissure in Sandstone"
            />
            <div className="card-body">
              <p className="card-title">{data.title}</p>
              <p className="card-title">{data.description}</p>
              <NavLink
                to={`/coursedetail/${data._id}`}
                className="btn btn-primary mt-3 me-4"
              >
                Read More
              </NavLink>
              <button
                className="btn btn-success mt-3 me-2"
                onClick={() => unenrolledcourse(data._id)}
              >
                Unenroll
              </button>
            </div>
          </div>
        </div>
      ));
    } else {
      return (
        <>
          <div className="container w-50">
            <h3 className="text-center mt-5">No enrolled courses</h3>
          </div>
        </>
      );
    }
  };


    const unenrolledcourse = async (courseId)=>{
     
      console.log(courseId);
      console.log(id);
      const studentId=id;
      console.log(studentId);

const response=  await fetch('http://localhost:5000/enroll/unenroll_course/', {
  method: 'post',
  body: JSON.stringify({ studentId: id, courseId }),
  headers: {
      'Content-Type': 'application/json'
  }
})
    console.log(response);
    if(response.status===200){
       console.log("course unenrolled");
       // Update the frontend data after successful unenrollment
      const updatedCourses = backendData.filter(course => course._id !== courseId);
      setBackendData(updatedCourses);
     localStorage.setItem(`enrolled_${courseId}`, "false");
    }
    else{
       console.log("some error in course unenrolled");
    }
    }

  useEffect(() => {
    showCourse();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <section className="col-md-3">
            <Sidebar />
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
