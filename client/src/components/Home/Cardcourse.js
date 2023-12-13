import React from "react";
import { NavLink } from "react-router-dom";
import swal from 'sweetalert2';

const Cardcourse = (props) => {

 const enroll= async (courseid)=>{
  const formData= JSON.parse(sessionStorage.getItem('currentStudent'))
  console.log(formData);
  console.log(formData._id);
  formData.append=courseid

  const enrollmentData = {
    studentId: formData._id,
    courseId: courseid
  };

  console.log(enrollmentData);
  console.log("student enrolled");
  const response= await fetch("http://localhost:5000/enroll/save",{
    method: 'post',
    body: JSON.stringify(enrollmentData),
    headers:{
        'Content-Type': 'application/json'
    }

   
});
console.log(response.status);
      
if(response.status===200){
    console.log("enrolled Successful");
    swal.fire({
        title:"enrolled Suuceesful",
        icon:"success",
        timer: 2000
      })
}
else{
    console.log("enrolled failed");
    swal.fire({
        title:"oops something wrong",
        icon:"error",
        timer: 2000
      })
}

  
 } 
 const enrollHandler = () => {
  console.log(props.id);
  enroll(props.id);
};

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
              
            <NavLink to={`/coursedetail/${props.id}`}  className="btn btn-primary mt-3">
              Read More
            </NavLink>
            <button  className="btn btn-success mt-3 ms-1" onClick={enrollHandler}>
              Enroll
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardcourse;
