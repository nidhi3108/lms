import React, { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import {Formik} from "formik";
import Swal from "sweetalert2";
import {useNavigate, resetForm} from "react-router-dom"
import { baseUrl } from "../../utils/constants";


const ProfileSetting = () => {

  const studentId=JSON.parse(sessionStorage.getItem("currentStudent"));
  console.log(studentId._id);

  const thumbnailpicteacherRef= useRef();
  const [selThumbnail, setSelThumbnail] = useState("")
  const LoginSubmit= async (formdata,{resetForm})=>{
    console.log("update all student  personal details ");
    console.log(formdata);
    formdata.thumbnail = selThumbnail;
    formdata.id = studentId._id;
    const response= await fetch(`${baseUrl}/student/editprofile`,{
      method: 'post',
      body: JSON.stringify(formdata),
      headers:{
          'Content-Type': 'application/json'
      }


  });
  console.log(response.status);
  const userData = await response.json();
  if(response.status===200){
    if (thumbnailpicteacherRef.current) {
      thumbnailpicteacherRef.current.value = null;
    }
      console.log("profile edit Successful");
      sessionStorage.setItem('currentTeacher',JSON.stringify(userData));
      Swal.fire({
        title:"Success",
        icon: "success",
        text:"edit Successful",
        timer: 2000,
        confirmButtonText: 'OK',
        confirmButtonColor: 'green'
        })
      resetForm();
  }
  else{
    console.log("edit profile failed");
    Swal.fire({
      title: "edit Failed...",
      icon: 'error',
      timer: 3000,
      text: 'Someone anonymous...',
      footer: `<a href='../userregister'>Want to register?</a>`
      })
}
    
  }

  const uploadThumbnail=(e)=>{
     const file=e.target.files[0];
     setSelThumbnail(file.name)
  const fd = new FormData();
      fd.append("myprofilephoto", file);
      fetch(`${baseUrl}/file/uploadprofilephoto`, {
        method: "POST",
        body: fd,
     }).then((res) => {
        if (res.status === 200) {
        console.log("profile photo uploaded");
        }
       });
  
     }


  return (
    <>
      <div className="container">
        <div className="row">
          <section className="col-md-3">
            <Sidebar />
          </section>
          <section className="col-md-8 mt-4">
            <div className="card">
              <h5 className="card-header">Change Profile</h5>
              <div className="card-body">
              <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            interest:"",
            phone:"",
            address:"",
          }}
          onSubmit={LoginSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row mb-3">
                      <div className="">
                      <label className="form-label" htmlFor="form3Example1">
                          Full Name
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
                  <div className=" mb-3">
                  <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                    <input
                       type="email"
                       id="email"
                       className="form-control"
                       onChange={handleChange}
                       value={values.email}
                    />

                  </div>

                  {/* //phone no */}
                  <div className=" mb-3">
                  <label className="form-label" htmlFor="form3Example3">
                      Phone No
                    </label>
                    <input
                      type="text"
                      id="phone"
                    className="form-control"
                    onChange={handleChange}
                    value={values.phone}
                    />

                  </div>
    {/* // address  */}
    <div className=" mb-3">
                  <label className="form-label" htmlFor="form3Example3">
                      Address
                    </label>
                    <input
                      type="address"
                      id="address"
                    className="form-control"
                    onChange={handleChange}
                    value={values.address}
                    />

                  </div>
                  {/* profile photo */}
                  <div className=" mb-3">
                  <label className="form-label" htmlFor="form3Example3">
                      Profile Photo
                    </label>
                    <input
                      type="file"
                      id="thumbnail"
                      className="form-control"
                      onChange={ uploadThumbnail}
                      ref={thumbnailpicteacherRef}
                    />

                  </div>
                  <div className=" mb-3">
                  <label className="form-label" htmlFor="form3Example3">
                     Interest
                    </label>
                    <input
                      type="text"
                      id="interest"
                      className="form-control"
                      onChange={handleChange}
                      value={values.interest}
                    />

                  </div>
                  {/* Password input */}
                  <div className="mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                    <input
                       type="password"
                       id="password"
                       className="form-control"
                       onChange={handleChange}
                       value={values.password}
                    />
                    
                  </div>
                  <button className="btn btn-primary">Save</button>
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

export default ProfileSetting;
