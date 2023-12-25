import React from "react";
import Register from "../Commonpages/Register";
const TeacherRegister = (props) => {
  return (
    <>
    <Register title="Register Here" name="Full Name" email="Email"  phone="Phone No" address="Address" qualification="Qualification" experience="Experience" password="Password"
flag="teacher"
/>
    </>
  )
}

export default TeacherRegister
