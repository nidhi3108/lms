import React from "react";
import TeacherSidebar from "./TeacherSidebar";
import {Formik} from "formik";
import Swal from "sweetalert2";
import {useNavigate, resetForm} from "react-router-dom"

const TeacherChangepassword = () => {
  const teacherId=JSON.parse(sessionStorage.getItem("currentTeacher"));
  console.log(teacherId._id);



  const changePass=  async (formdata,{resetForm})=>{
    console.log(formdata);
    formdata.id = teacherId._id;
    const response= await fetch("http://localhost:5000/teacher/edit",{
      method: 'post',
      body: JSON.stringify(formdata),
      headers:{
          'Content-Type': 'application/json'
      }


  });
  console.log(response.status);
  const userData = await response.json();
  if(response.status===200){
      console.log("Password Update Successful");
      Swal.fire({
        title:"Success",
        icon: "success",
        text:"pass Upadation Successful",
        timer: 2000,
        confirmButtonText: 'OK',
        confirmButtonColor: 'green'
        })
      resetForm();
  }
  else{
      console.log("Pass updation failed");
      Swal.fire({
        title: "pass updation Failed...",
        icon: 'error',
        timer: 3000,
        text: 'Someone anonymous...',
        })
  }
  resetForm();
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <section className="col-md-3">
            <TeacherSidebar/>
          </section>
          <section className="col-md-9 mt-4">
            <div className="card">
              <h5 className="card-header">Reset password</h5>
              <div className="card-body">
          
              <Formik
          initialValues={{
            email: "",
            password: "",
            confirmpass:"",
          }}
          onSubmit={changePass}
        >
          {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  {/* Email input */}
                  <div className="mb-2">
                  <label className="form-label" htmlFor="form1Example1">
                      Email address
                    </label>
                    <input
                       type="text"
                       id="email"
                       className="form-control"
                       onChange={handleChange}
                       value={values.email}
                    />
                  </div>
                  <div className="mb-2">
                  <label className="form-label" htmlFor="form1Example2">
                      New Password
                    </label>
                    <input
                       type="password"
                       id="password"
                       className="form-control"
                       onChange={handleChange}
                       value={values.password}
                    />
                  </div>
                  <div className="mb-2">
                  <label className="form-label" htmlFor="form1Example2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirmpass"
                      className="form-control"
                      onChange={handleChange}
                      value={values.confirmpass}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" >
                    Sign in 
                  </button>
                </form>
                  )}
                  </Formik>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TeacherChangepassword;
