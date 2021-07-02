import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h3>Logo</h3>
      <ul>
        <Link to="/projects">
          <li>About</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
