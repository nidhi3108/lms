import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

const NavBarTeacher = (props) => {
  const navigate = useNavigate();
  let userState = sessionStorage.getItem("currentTeacher");

  const signOut = () => {
    sessionStorage.removeItem("currentTeacher");
    props.setRenderHeader(false)
    navigate("../");
  };
//    let currentStudent= sessionStorage.getItem("currentStudent")
//    console.log(currentStudent);
  return (
    <>
      {/* {currentStudent? */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div
            className="collapse navbar-collapse .textcolor-blue"
            id="navbarTogglerDemo01"
          >
            <h3 className="navbar-brand">LMS</h3>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/course">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/teachers">
                  Teachers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
            </ul>
            <div className="dropdown">
              <button
                data-mdb-ripple-color="dark"
                className=" btn btn-outline-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <NavLink className="dropdown-item" to="user-login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="user-register">
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="user-dashboard">
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown ms-3">
              <button
                data-mdb-ripple-color="dark"
                className=" btn btn-outline-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Teacher
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <NavLink className="dropdown-item" to="teacher-login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="teacher-register">
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="teacher-dashboard">
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="signout">
            <button
                type="button"
                onClick={signOut}
                class="btn btn-danger me-3"
              >
                Sign out
              </button>
                  </div>
            <form className="d-flex input-group w-auto ms-3">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                data-mdb-ripple-color="dark"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}
      {/* : */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"/>
          </button>
          <div
            className="collapse navbar-collapse .textcolor-blue"
            id="navbarTogglerDemo01"
          >
            <h3 className="navbar-brand">LMS</h3>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about-us">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/teachers">
                  Teachers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
            </ul>
            <div className="dropdown ms-3">
              <button
                data-mdb-ripple-color="dark"
                className=" btn btn-outline-primary dropdown-toggle me-3"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Teacher
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <NavLink className="dropdown-item" to="teacher-login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="teacher-register">
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="teacher-dashboard">
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="signout">
              <button
                type="button"
                onClick={signOut}
                class="btn btn-danger me-3"
              >
                Sign out
              </button>
            </div>
            <form className="d-flex input-group w-auto ms-3">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                data-mdb-ripple-color="dark"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* } */}
    </>
  );
};

export default NavBarTeacher;
