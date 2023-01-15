import React from "react";

// const styles = {
//   nav: {
//     background: "white",
//     fontSize: "20px",
//     color: "black",
//     borderBottom: "2px black solid",
//     marginBottom: "20px",
//   },
// };

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Tracy Pham</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>{" "}
      </div>{" "}
      <div className="collapse navbar-collapse" id="navbarNav">
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
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
      </div>
    </nav>
  );
}

export default NavTabs;
