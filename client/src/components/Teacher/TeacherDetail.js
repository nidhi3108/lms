import React from "react";
import { NavLink,Link } from "react-router-dom";
import { Youtube } from "react-feather";

const TeacherDetail = (props) => {
  return (
    <>
      <div className="container mt-5 w-75">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHY9CHw_2VsuMCijpcpQ6nEk4quK_TtGKMvg9OHMiSDl1Ebyc7zUhubBojR5gYPjX_AIc&usqp=CAU"
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body p-0">
                <h5 className="card-title">Nidhi Verma</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer. This is a wider card with supporting text
                  below as a natural lead-in to additional content. This content
                  is a little bit longer.
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
