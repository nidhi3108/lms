 import React, { useEffect } from "react";
import { baseUrl } from "../../utils/constants";

 const StudentDetailPage = () =>{

const studentdata= JSON.parse(sessionStorage.getItem('currentStudent'))
console.log(studentdata._id);

const showAllStudentDetail= async () =>{
  const response = await fetch(`${baseUrl}/student/getall/` + studentdata._id );
  // console.log(response.status);
  // const data = await response.json();
  // console.log(data);
}


  useEffect(()=>{
    showAllStudentDetail();
  })


    return (
        <>
         <div className="container mt-5 w-75">
        <div className="card mb-3">
          <div className="row">
            <div className="col-md-4">
              {/* <img
              width="100%"
                src={baseUrl+"/" + TeacherbackendData.thumbnail
                 }
                 alt="Tacher pic"
              /> */}
            </div>
            <div className="col-md-8">
              <div className="card-body p-0">
                <h3>nidhi</h3>
                {/* <h5 className="card-title">{TeacherbackendData.name}</h5>
                <p className="card-text fw-bold ">
                 E-mail: <NavLink to={`mailto:${TeacherbackendData.email}`}> {TeacherbackendData.email}</NavLink><br/>
                 Qualification: <span className="text-success">{TeacherbackendData.qualification}</span><br/>
                 Phone-No: <span className="text-success"> {TeacherbackendData.phoneno}</span>
                 Qualification: <span className="text-success"> {TeacherbackendData.qualification}</span><br/>
                 Address:  <span className="text-success">{TeacherbackendData.address}</span><br/>
                 Experience:  <span className="text-success"> {TeacherbackendData.experience}</span>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
 }

 export default  StudentDetailPage