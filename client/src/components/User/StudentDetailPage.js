 import React, { useEffect, useState } from "react";
import { baseUrl } from "../../utils/constants";
import { NavLink} from "react-router-dom";

 const StudentDetailPage = () =>{

const [studentData, setstudentData]= useState([])

const studentdata= JSON.parse(sessionStorage.getItem('currentStudent'))
console.log(studentdata._id);

const showAllStudentDetail= async () =>{
  const response = await fetch(`${baseUrl}/student/getall/` + studentdata._id);
  console.log(response.status);
  const data = await response.json();
  console.log(data);
  setstudentData(data)
}


  useEffect(()=>{
    showAllStudentDetail();
  },[])


    return (
        <>
         <div className="container mt-5 w-75">
        <div className="card mb-3">
          <div className="row">
            <div className="col-md-4">
              <img
              width="100%"
                src={baseUrl+"/" + studentData.thumbnail
                 }
                 alt="Tacher pic"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-0">
                
                <h5 className="card-title">{studentData.name}</h5>
                <p className="card-text fw-bold ">
                 E-mail: <NavLink to={`mailto:${studentData.email}`}> {studentData.email}</NavLink><br/>
                 {/* Qualification: <span className="text-success">{studentData.qualification}</span><br/> */}
                 Phone-No: <span className="text-success"> {studentData.phone}</span><br/>
                 Interest: <span className="text-success"> {studentData.interest}</span><br/>
                 Address:  <span className="text-success">{studentData.address}</span><br/>
                 {/* Experience:  <span className="text-success"> {studentData.experience}</span> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
 }

 export default  StudentDetailPage