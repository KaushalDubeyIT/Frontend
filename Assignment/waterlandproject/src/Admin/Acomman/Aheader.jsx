import React from "react";
import { Link, NavLink } from "react-router-dom";

function Aheader() {
  return (
    <div>
      <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a href className="navbar-brand p-0">
            <h1 className="display-6 text-dark">
              <i className="fas fa-swimmer text-primary me-3" />
              Waterland
            </h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <NavLink to="/" className="nav-item nav-link ">
                Dashboard
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/ateam" className="nav-item nav-link">
                Team
              </NavLink>
              <div className="nav-item dropdown">
                <NavLink to="/ablogs" className="nav-item nav-link">
                  Blog
                </NavLink>
                <div className="dropdown-menu m-0">
                  <Link to="/ablogs" className="dropdown-item">
                    Manage Blogs
                  </Link>
                  <Link to="/addblog" className="dropdown-item">
                    Add Blogs
                  </Link>
                </div>
              </div>

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <Link to="/feature" className="dropdown-item">
                    Our Feature
                  </Link>
                  <Link to="/gallery" className="dropdown-item">
                    Our Gallery
                  </Link>
                  <Link to="/attraction" className="dropdown-item">
                    Attractions
                  </Link>
                  <Link to="/package" className="dropdown-item">
                    Ticket Packages
                  </Link>
                  <Link to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact
              </NavLink>
            </div>
            <div className="team-icon d-none d-xl-flex justify-content-center me-3">
              <a className="btn btn-square btn-light rounded-circle mx-1" href>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square btn-light rounded-circle mx-1" href>
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square btn-light rounded-circle mx-1" href>
                <i className="fab fa-instagram" />
              </a>
              <a className="btn btn-square btn-light rounded-circle mx-1" href>
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <a
              href="#"
              className="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Aheader;
