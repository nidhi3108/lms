import React from "react";
import Swal from "sweetalert2";
import {Formik} from "formik";
import {useNavigate, resetForm} from "react-router-dom"

const Login = (props) => {
  const navigate = useNavigate();
  const flag = props.flag;
  const LoginSubmit = async (formdata,{resetForm}) => {
    console.log(formdata);
    if (flag === "teacher"){
      const response= await fetch("http://localhost:5000/teacher/login",{
        method: 'post',
        body: JSON.stringify(formdata),
        headers:{
            'Content-Type': 'application/json'
        }
  

    });
    console.log(response.status);
    const userData = await response.json();
    if(response.status===200){
        console.log("Login Successful");
        sessionStorage.setItem('currentTeacher',JSON.stringify(userData));
        Swal.fire({
          title:"Success",
          icon: "success",
          text:"Log In Successful",
          timer: 2000,
          confirmButtonText: 'OK',
          confirmButtonColor: 'green'
          })
        navigate("/teacher-dashboard");
        resetForm();
    }
    else{
        console.log("Login failed");
        Swal.fire({
          title: "Login Failed...",
          icon: 'error',
          timer: 3000,
          text: 'Someone anonymous...',
          footer: `<a href='../userregister'>Want to register?</a>`
          })
    }
  }
  else{
    const response= await fetch("http://localhost:5000/student/login",{
      method: 'post',
      body: JSON.stringify(formdata),
      headers:{
          'Content-Type': 'application/json'
      }
  
     
  });
  console.log(response.status);
  const userData = await response.json();
  if(response.status===200){
      console.log("login Successful");
      
      // Swal.fire({
      //     title:"Register Suuceesful",
      //     icon:"success",
      //     timer: 2000
      //   })
      navigate("/user-dashboard");
        resetForm();
  }
  else{
      console.log("login failed");
      // Swal.fire({
      //     title:"oops something wrong",
      //     icon:"error",
      //     timer: 2000
      //   })
  }
  }
  };
  return (
    <>
      <h3 className="text-center mt-4">{props.title}</h3>
      <div className="container w-50 mt-4 border border-secondary rounded">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={LoginSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              {/* 2 column grid layout with text inputs for the first and last names */}
              <div className="row mb-4">
                <div className="col">
                  <label className="form-label" htmlFor="form6Example1">
                    {props.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    onChange={handleChange}
                    value={values.name}
                  />
                </div>
              </div>
         
              {/* Email input */}
              <div className="mb-4">
                <label className="form-label" htmlFor="form6Example5">
                  {props.email}
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              {/* Number input */}
             
              <div className="mb-4">
                <label className="form-label" htmlFor="form6Example6">
                  {props.password}
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  onChange={handleChange}
                  value={values.password}
                />
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
