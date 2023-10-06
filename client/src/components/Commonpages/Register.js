import React, { useState } from "react";
const Register = (props) => {
  const flag = props.flag;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    // interest: "",
    // interest: flag === "student" ? "" : null, // Initialize based on flag
    // qualification: flag === "teacher" ? "" : null,
    password: "",
    flag: "",
  });
  let name, value;
  const handleInputChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("success handlesubmit");
    
   if (flag === "teacher"){
    const response= await fetch("http://localhost:5000/teacher/register",{
      method: 'post',
      body: JSON.stringify(formData),
      headers:{
          'Content-Type': 'application/json'
      }

     
  });
  console.log(response.status);
        
  if(response.status===200){
      console.log("Register Successful");
      // Swal.fire({
      //     title:"Register Suuceesful",
      //     icon:"success",
      //     timer: 2000
      //   })
  }
  else{
      console.log("Register failed");
      // Swal.fire({
      //     title:"oops something wrong",
      //     icon:"error",
      //     timer: 2000
      //   })
  }
}
else{
  const response= await fetch("http://localhost:5000/student/register",{
    method: 'post',
    body: JSON.stringify(formData),
    headers:{
        'Content-Type': 'application/json'
    }

   
});
console.log(response.status);
      
if(response.status===200){
    console.log("Register Successful");
    // Swal.fire({
    //     title:"Register Suuceesful",
    //     icon:"success",
    //     timer: 2000
    //   })
}
else{
    console.log("Register failed");
    // Swal.fire({
    //     title:"oops something wrong",
    //     icon:"error",
    //     timer: 2000
    //   })
}
}
  }
  return (
    <>
      <h3 className="text-center mt-4">{props.title}</h3>
      <div className="container w-50 mt-4 border border-secondary rounded">
        <form onSubmit={handleSubmit}>
          {/* 2 column grid layout with text inputs for the first and last names */}
          <div className="row mb-4">
            <div className="col">

              {/* name  */}
              <div className="">
                <label className="form-label" htmlFor="form6Example1">
                  {props.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          {/* email  */}
          <div className="mb-4">
            <label className="form-label" htmlFor="form6Example5">
              {props.email}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          {/* phone no input */}
          <div className="mb-4">
            <label className="form-label" htmlFor="form6Example6">
              {props.phone}
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          {/* addresss */}
          <div className=" mb-4">
            <label className="form-label" htmlFor="form6Example4">
              {props.address}
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="form-control"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          {flag == "student" ? (
            <div className=" mb-4">
              <label className="form-label" htmlFor="form6Example4">
                {props.interest}
              </label>
              <input
                type="text"
                name="interest"
                id="interest"
                className="form-control"
                value={formData.interest}
                onChange={handleInputChange}
              />
            </div>
          ) : (
            <div className=" mb-4">
              <label className="form-label" htmlFor="form6Example4">
                {props.qualification}
              </label>
              <input
                type="text"
                name="qualification"
                id="qualification"
                className="form-control"
                value={formData.qualification}
                onChange={handleInputChange}
              />
            </div>
          )}

          {/* password  */}
          <div className=" mb-4">
            <label className="form-label" htmlFor="form6Example4">
              {props.password}
            </label>
            <input
              type="text"
              name="password"
              id="password"
              className="form-control"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
