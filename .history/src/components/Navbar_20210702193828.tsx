import React from "react";
import logo from "./logo.svg";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <h3>Website Logo maybe</h3>
      </Link>
      <ul>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
