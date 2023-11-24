import React from "react";
import { NavLink } from "react-router-dom";

const CardPopularTeachercourse = (props) => {
  return (
    <>
      <div className="col-sm-3">
        <div className="card">
          <img src={props.img} alt="Fissure in Sandstone" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            
              
            <NavLink to="/teacher-detail/1" className="btn btn-primary mt-3">
              Read More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPopularTeachercourse;
