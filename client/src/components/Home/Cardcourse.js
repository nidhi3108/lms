import React from "react";
import { NavLink } from "react-router-dom";

const Cardcourse = (props) => {
  return (
    <>
        <div className="col-sm-3">
            <div className="card">
              <img
                src={props.img}
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                 {props.description}
                </p>
                <div className="card-footer">
                <p className="card-title">Rating:5/10</p>
                <p className="card-title">Views:55855</p>
                </div>
                
                <NavLink to="/detail/1" className="btn btn-primary">
                  Read More
                </NavLink>
                </div>
        </div>
      </div>
    </>
  );
};

export default Cardcourse;
