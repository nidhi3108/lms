import React from 'react'

const Header=()=>{
    return(
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
    <div className="collapse navbar-collapse .textcolor-blue" id="navbarTogglerDemo01">
      <h3 className="navbar-brand">
        LMS
      </h3>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/course">
            Courses
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/teachers">Teachers</a>
        </li>
      </ul>
      <form className="d-flex input-group w-auto">
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
    )
}

export default Header