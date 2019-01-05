import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom">
    <Link to="/" className="navbar-brand" href="#">
      Navbar
    </Link>
    <button
      type="button"
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#topNav"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div id="topNav" className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Recent Projects
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
