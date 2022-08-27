import React from "react";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="px-3 py-2 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
            Brandt Davidson
          </a>
          <ul className="navbar-brand nav nav-pills col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => handlePageChange("Home")}
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => handlePageChange("Projects")}
                className={
                  currentPage === "Projects" ? "nav-link active" : "nav-link"
                }
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
