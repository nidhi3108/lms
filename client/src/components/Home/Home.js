import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {

 const clearAll=()=>{
  sessionStorage.removeItem("currentTeacher");
  sessionStorage.removeItem("currentStudent");

 }

  useEffect(()=>{
    clearAll();
  },[])

  return (
    <>
      <header>
        {/* Intro settings */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    /* Default height for small devices */\n    #intro-example {\n      height: 400px;\n    }\n\n    /* Height for devices larger than 992px */\n    @media (min-width: 992px) {\n      #intro-example {\n        height: 600px;\n      }\n    }\n  ",
          }}
        />

        {/* Background image */}
        <div
          id="intro-example"
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              'url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")',
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Learning Management System</h1>
                <h5 className="mb-4">Best &amp; free courses for all</h5>
                <NavLink
                  data-mdb-ripple-init=""
                  className="btn btn-outline-light btn-lg m-2"
                  to="/user-login"
                  role="button"
                  rel="nofollow"
                >
                  Login as Student
                </NavLink>
                <NavLink
                  data-mdb-ripple-init=""
                  className="btn btn-outline-light btn-lg m-2"
                  to="/teacher-login"
                  role="button"
                >
                  Login as Teacher
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* Background image */}
      </header>
    </>
  );
};

export default Home;
