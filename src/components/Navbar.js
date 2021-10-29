import React from "react";
import "./../style/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="__Navbar">
      <nav className="navbarContainer">
        <div className="logoContainer">
        <Link to="/"><img src="/logo.png" alt="Logo" /></Link>
        </div>
        <div className="buttonContainer">
          <Link to="/cart">View Cart</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
