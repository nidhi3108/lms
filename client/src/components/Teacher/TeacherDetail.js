import React, { useState } from "react";
import { NavLink,Link, useParams } from "react-router-dom";
import { Youtube } from "react-feather";
import { useEffect } from "react";

const TeacherDetail = () => {
  const [currentTeacher, setcurrentTeacher] = useState(JSON.parse(sessionStorage.getItem('currentTeacher')))
   const [backendData,setBackendData]= useState([])
   const url= "http://localhost:5000/";
  
   

  const [TeacherbackendData, setTeacherbackendData] = useState([]);
  let { teacher_id } = useParams();
  console.log(teacher_id);


  const showCourse = async () => {
    const response = await fetch("http://localhost:5000/course/getall/" + teacher_id);
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setBackendData(data);
    console.log(backendData.length);
  }; 

  const showTeacherDetail= async ()=>{
    const response = await fetch("http://localhost:5000/teacher/getrelatedTeacherDetail/"+teacher_id);
    console.log(response.status);
    const data = await response.json();

    console.log(data);
    setTeacherbackendData(data);
    // console.log(RealtedTeacherbackendData.length);
  }

  useEffect(() => {
    showTeacherDetail();
    showCourse();
  }, []);


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
            {/* <h6>{currentTeacher._id}</h6> */}
             <div className="button d-flex" >
            <Link to={"/coursedetail/"+data._id} className="btn btn-primary me-2 "style={{height: "fit-content"}}>
              View
            </Link>

            </div>
          </div>
        </div>
      </div>
    ));
  }


  return (
    <>
      <div className="container mt-5 w-75">
        <div className="card mb-3">
          <div className="row">
            <div className="col-md-4">
              <img
              width="100%"
                src={url + TeacherbackendData.thumbnail
                 }
                 alt="Tacher pic"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-0">
                <h5 className="card-title">{TeacherbackendData.name}</h5>
                <p className="card-text fw-bold ">
                 E-mail: <NavLink to={`mailto:${TeacherbackendData.email}`}> {TeacherbackendData.email}</NavLink><br/>
                 Qualification: <span className="text-success">{TeacherbackendData.qualification}</span><br/>
                 Phone-No: <span className="text-success"> {TeacherbackendData.phoneno}</span>
                 Qualification: <span className="text-success"> {TeacherbackendData.qualification}</span><br/>
                 Address:  <span className="text-success">{TeacherbackendData.address}</span><br/>
                 Experience:  <span className="text-success"> {TeacherbackendData.experience}</span>
                </p>

              </div>
            </div>
          </div>
        </div>
        <div className="card mt-4 border border-secondary">
        <h3 className="card-header ">Course Lists</h3>
        <div className="card-body">
        <div className="row">{showAllCourse()}</div>

      </div>

        </div>
      </div>
    </>
  );
};

export default TeacherDetail;
