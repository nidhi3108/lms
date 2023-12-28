import React from "react"

const Home=()=>{

    return (
        <>
        <header>
  {/* Intro settings */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    /* Default height for small devices */\n    #intro-example {\n      height: 400px;\n    }\n\n    /* Height for devices larger than 992px */\n    @media (min-width: 992px) {\n      #intro-example {\n        height: 600px;\n      }\n    }\n  "
    }}
  />
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <button
        data-mdb-collapse-init=""
        className="navbar-toggler"
        type="button"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Navbar */}
  {/* Background image */}
  <div
    id="intro-example"
    className="p-5 text-center bg-image"
    style={{
      backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")'
    }}
  >
    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
          <h5 className="mb-4">
            Best &amp; free guide of responsive web design
          </h5>
          <a
            data-mdb-ripple-init=""
            className="btn btn-outline-light btn-lg m-2"
            href="https://www.youtube.com/watch?v=c9B4TPnak1A"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            Start tutorial
          </a>
          <a
            data-mdb-ripple-init=""
            className="btn btn-outline-light btn-lg m-2"
            href="https://mdbootstrap.com/docs/standard/"
            target="_blank"
            role="button"
          >
            Download MDB UI KIT
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Background image */}
</header>

        </>
    )
}

export default Home