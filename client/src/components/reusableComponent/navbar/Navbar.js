import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to="/">
          <div className="logo">
            <div>NutriMap</div>
          </div>
        </Link>
        <div className="navbar-buttons">
          <div>About</div>
          <div>Data</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
