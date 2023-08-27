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
              <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">
                 {props.description}
                </p>
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
