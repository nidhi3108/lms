import React from "react";

const Cardcourse = (props) => {
   
  return (
    <>
        <div className="col-sm-3">
            <div class="card">
              <img
                src={props.img}
                alt="Fissure in Sandstone"
              />
              <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">
                 {props.description}
                </p>
                <a href="#!" class="btn btn-primary">
                  Read More
                </a>
                </div>
        </div>
      </div>
    </>
  );
};

export default Cardcourse;
