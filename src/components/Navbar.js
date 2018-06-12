import React from "react";

const Navbar = props => (
  <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Meet the X-Men
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">
          Score <span className="sr-only">(current)</span>
        </a>
        <a className="nav-item nav-link active" href="#">
          {props.score} <span className="sr-only">(current)</span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
