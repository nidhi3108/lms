import React, { useState } from "react";
import { NavLink,Link, useParams } from "react-router-dom";
import { Youtube } from "react-feather";
import { useEffect } from "react";

const TeacherDetail = () => {
  const [TeacherbackendData, setTeacherbackendData] = useState([]);
  let { teacher_id } = useParams();
  console.log(teacher_id);
  const url = "http://localhost:5000/";

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
   
  }, []);
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
                <p className="card-text fw-bold">
                 E-mail: {TeacherbackendData.email}<br/>
                 Qualification: {TeacherbackendData.qualification}
                 Phone-No: {TeacherbackendData.phone}
                </p>
                <p className="fw-bold">
                  Skills: <NavLink to="/teacher-detail/1">PHP</NavLink>,
                  <NavLink to="/teacher-detail/1">React</NavLink>,
                  <NavLink to="/teacher-detail/1">MERN STACK</NavLink>,
                  <NavLink to="/teacher-detail/1">JavaScript</NavLink>
                </p>
                <p className="fw-bold">Recent Course:<NavLink to="/teacher-detail/1">React</NavLink></p>
                <p className="fw-bold">Rating: 4/5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-4 border border-secondary">
        <h3 className="card-header ">Course Lists</h3>
          <div className="list-group list-group-flush">
          <NavLink to="/detail/1" className='list-group-item list-group-item-action'>React Course 1</NavLink>
          <NavLink to="/detail/1" className='list-group-item list-group-item-action'>React Course 2</NavLink>
          <NavLink to="/detail/1" className='list-group-item list-group-item-action'>PHP Course </NavLink>
          <NavLink to="/detail/1" className='list-group-item list-group-item-action'>Node.js Course</NavLink>
          <NavLink to="/detail/1" className='list-group-item list-group-item-action'>Express.js Course</NavLink>
          <NavLink to="/detail/1" className='list-group-item list-group-item-action'>JavaScript Course</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherDetail;
