import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert2";

const Cardcourse = (props) => {
  const [currentStudent, setcurrentStudent]=useState(sessionStorage.getItem("currentStudent"))
  console.log(currentStudent);
  const [enrolled, setEnrolled] = useState(localStorage.getItem(`enrolled_${props.id}`) === "true");
  const buttonRef = useRef();
  const enroll = async (courseid) => {
    const formData = JSON.parse(sessionStorage.getItem("currentStudent"));
    console.log(formData);
    if (!formData) {
      console.log("Login first");
      swal.fire({
        title: "Login First",
        icon: "error",
        timer: 2000,
      });
    } else {

      //here write comparing comdition of enrolled and all fethed course of that logined student
      
      console.log(formData._id);
      formData.append = courseid;

      const enrollmentData = {
        studentId: formData._id,
        courseId: courseid,

      };

      console.log(enrollmentData);
      console.log("student enrolled");
      const response = await fetch("http://localhost:5000/enroll/save", {
        method: "post",
        body: JSON.stringify(enrollmentData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.status);

      if (response.status === 200) {
        console.log("enrolled Successful");
        localStorage.setItem(`enrolled_${props.id}`, "true");
        // Changebuttoncolor(response.status);
        setEnrolled(true);
        buttonRef.current.style.backgroundColor = "green";
        swal.fire({
          title: "enrolled Suuceesful",
          icon: "success",
          timer: 2000,
        });
      } else {
        console.log("enrolled failed");
        swal.fire({
          title: "Already enrolled this course",
          icon: "error",
          timer: 2000,
        });
      }
    }
  };
  const enrollHandler = () => {
    console.log(props.id);
    enroll(props.id);

  };

  //for changung color of enrolled button
  useEffect(() => {
    if (enrolled) {
      buttonRef.current.style.backgroundColor = "green";
    }
  }, [enrolled]);

//for chaging color of button enroll but if student is not login
  useEffect(() => {
    if (!currentStudent) {
      buttonRef.current.style.backgroundColor = "green";
    }
  }, [currentStudent]);
  
  return (
    <>
      <div className="col-sm-3">
        <div className="card">
          <img src={props.img} alt="Fissure in Sandstone" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            {/* <div className="title">
              <span>
                <strong>Rating:</strong> 5/10
              </span>
              <span className="float-end">
                <strong>Views:</strong> 55855
              </span>
            </div> */}

            <NavLink
              to={`/coursedetail/${props.id}`}
              className="btn btn-primary mt-3"
            >
              Read More
            </NavLink>
            <button
            ref={buttonRef}
              // className="btn btn-danger mt-3 ms-1"
              className={`btn ${enrolled ? "btn-success" : "btn-danger"} mt-3 ms-1`}
              onClick={enrollHandler}
            >
               {enrolled ? "Enrolled" : "Enroll"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardcourse;


