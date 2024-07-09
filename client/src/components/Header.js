import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import NavBarTeacher from "./Home/NavbarTeacher";
import NavBarStudent from "./Home/NavBarStudent";

const Header = (props) => {

  const [currentTeacher, setCurrentTeacher] = useState(
    sessionStorage.getItem("currentTeacher")
  );
  console.log(currentTeacher);
  const [currentStudent, setCurrentStudent] = useState(
    sessionStorage.getItem("currentStudent")
  );
  
  console.log(currentTeacher);

  useEffect(() => {

    // Update the state when sessionStorage changes
    setCurrentTeacher(sessionStorage.getItem("currentTeacher"));
    setCurrentStudent(sessionStorage.getItem("currentStudent"));
  }, [currentStudent, currentTeacher, props.renderHeader]);


  return (
    <>
      {currentStudent && !currentTeacher && <NavBarStudent setRenderHeader={props.setRenderHeader}/>}
      {!currentStudent && currentTeacher && <NavBarTeacher setRenderHeader={props.setRenderHeader}/>}

      {/*{!currentStudent && !currentTeacher && (*/}
      {/*  <nav className="navbar navbar-expand-lg navbar-dark bg-dark"></nav>*/}
      {/*)}*/}
    </>
  );
};

export default Header;
