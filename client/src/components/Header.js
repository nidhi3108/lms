import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
