import React, { useEffect, useState } from "react"
import { baseUrl } from "../../utils/constants"
import { NavLink} from "react-router-dom";

const TeacherDetailPage = ()=>{
    const [teacherData, setteacherData]= useState([])

const teacherdata= JSON.parse(sessionStorage.getItem('currentTeacher'))
console.log(teacherdata._id);

const showAllteacherDetail= async () =>{
  const response = await fetch(`${baseUrl}/teacher/getall/`+ teacherdata._id );
  console.log(response.status);
  const data = await response.json();
  console.log(data);
  setteacherData(data)
}


  useEffect(()=>{
    showAllteacherDetail();
  },[])


    return(
        <>
          <div className="container mt-5 w-75">
        <div className="card mb-3">
          <div className="row">
            <div className="col-md-4">
              <img
              width="100%"
                src={baseUrl+"/" + teacherData.thumbnail
                 }
                 alt="Tacher pic"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-0">
                
                <h5 className="card-title">{teacherData.name}</h5>
                <p className="card-text fw-bold ">
                 E-mail: <NavLink to={`mailto:${teacherData.email}`}> {teacherData.email}</NavLink><br/>
                 {/* Qualification: <span className="text-success">{teacherData.qualification}</span><br/> */}
                 Phone-No: <span className="text-success"> {teacherData.phone}</span><br/>
                 Qualification: <span className="text-success"> {teacherData.qualification}</span><br/>
                 Address:  <span className="text-success">{teacherData.address}</span><br/>
                 {/* Experience:  <span className="text-success"> {teacherData.experience}</span> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default TeacherDetailPage