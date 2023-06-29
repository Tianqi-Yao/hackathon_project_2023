import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <div>NutriMap</div>
        </div>
        <div className="navbar-buttons">
          <div>About</div>
          <div>Data</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
