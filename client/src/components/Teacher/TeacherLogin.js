import React from "react";
import Login from "../Commonpages/Login"

const TeacherLogin = (props) => {
  return (
    <>
      <Login title="Login Here" name="Full Name" email="Email" password="Password" flag="teacher"
             setRenderHeader={props.setRenderHeader}/>
    </>
  )
}

export default TeacherLogin
