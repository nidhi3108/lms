import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBarStudent = (props) => {
  const navigate = useNavigate();
  let userState = sessionStorage.getItem("currentStudent");

  const signOut = () => {
    sessionStorage.removeItem("currentStudent");
    props.setRenderHeader(false);
    navigate("../");
  };
  return (
    <>
    {/* {currentStudent? */}
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
            <i className="fas fa-bars" />
          </button>
          <div
            className="collapse navbar-collapse .textcolor-blue"
            id="navbarTogglerDemo01"
          >
            <h3 className="navbar-brand">LMS</h3>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/all-latest-courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/all-latest-teacher">
                  Teachers
                </NavLink>
                </li><li>
                <NavLink className="nav-link" to="user-dashboard">
                    Dashboard
                  </NavLink>
              </li>

            </ul>
            {/* <div className="dropdown">
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
            </div> */}
            <div className="signout">
            <button
                type="button"
                onClick={signOut}
                class="btn btn-danger me-3"
              >
                Sign out
              </button>
                  </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarStudent;
