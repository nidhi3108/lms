import React, {useContext, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import NavBarTeacher from "./Home/NavbarTeacher";
import NavBarStudent from "./Home/NavBarStudent";
import {RenderHeaderContext} from "../App";

const Header = () => {
  const {renderHeader} = useContext(RenderHeaderContext);
  // let currentTeacher = sessionStorage.getItem("currentTeacher");
  // console.log(currentTeacher);
  // let currentStudent = sessionStorage.getItem("currentStudent");
  // console.log(currentStudent);

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
  }, [currentStudent, currentTeacher, renderHeader]);


  return (
    <>
      {currentStudent && <NavBarStudent/>}
      {!currentStudent && currentTeacher && <NavBarTeacher/>}

      {/*{!currentStudent && !currentTeacher && (*/}
      {/*  <nav className="navbar navbar-expand-lg navbar-dark bg-dark"></nav>*/}
      {/*)}*/}
    </>
  );
};

export default Header;
