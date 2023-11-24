import React from "react";
import { NavLink } from "react-router-dom";

const Cardcourse = (props) => {

  
  return (
    <>
      <div className="col-sm-3">
        <div className="card">
          <img src={props.img} alt="Fissure in Sandstone" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
              <div className="title">
                <span><strong>Rating:</strong> 5/10</span>
                <span className="float-end"><strong>Views:</strong> 55855</span>
              </div>
              
            <NavLink to="/detail/1" className="btn btn-primary mt-3">
              Read More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardcourse;
