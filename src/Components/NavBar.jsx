import logo from "../images/logo.png";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <p className="logo-name">HavenHub</p>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Properties</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
