import React, { useEffect, useState } from "react";
import TeacherSidebar from "./TeacherSidebar";
import TeacherAddcourse from "./TeacherAddcourse"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Trash2 } from 'react-feather';

const TeacherMyCourse= () => {
  const [currentTeacher, setcurrentTeacher] = useState(JSON.parse(sessionStorage.getItem('currentTeacher')))
   const [backendData,setBackendData]= useState([])
   const url= "http://localhost:5000/";
   const { id } = useParams();
   console.log(id);
   
  const showCourse = async () => {
    const response = await fetch("http://localhost:5000/course/getall/" + id);
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setBackendData(data);
    console.log(backendData.length);
  }; 


const deletecourse= async (data)=>{
  console.log(data);
  console.log("delete kro course");
  const response=  await fetch('http://localhost:5000/course/delete/', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(response);
    if(response.status===200){
       console.log("course deleted");
    }
    else{
       console.log("some error in course deletion");
    }
    showCourse();
}

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
            <Link to={"/all-chapter/"+data._id} className="btn btn-primary me-2 "style={{height: "fit-content"}}>
              View
            </Link>
            <Link to={"/teacher-addchapter"} className="btn btn-primary me-1"style={{height: "fit-content"}} onClick={()=>
              
              // console.log("selected course saing :::",data._id)
{              localStorage.setItem("selectedCourse",data._id)
}            }>
              +Chapter
            </Link>
            <button onClick={() => deletecourse(data)}>
              <Trash2 style={{color: 'red'}} />
            </button>
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
        </div>
      </div>
              
    </section>
                
    </div>
    </div>
    </>
  );
};

export default TeacherMyCourse;
