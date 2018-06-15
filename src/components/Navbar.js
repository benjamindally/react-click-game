import React from "react";

const Navbar = props => (
  <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">Meet the X-Men</a>
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
        <a className="nav-item nav-link active">Score:</a>
        <a className="nav-item nav-link active">{props.score}</a>
        <a className="nav-item nav-link active">High Score:</a>
        <a className="nav-item nav-link active">{props.highScore}</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
