import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="nav">
        <h1 className="logo">Blog</h1>
        <nav className="nav-bar">
          <Link className="nav-item" to="/">
            <p>Home</p>
          </Link>
          <Link className="nav-item" to="/about-us">
            <p>About</p>
          </Link>
          <Link className="nav-item" to="/contact-us">
            <p>Contact</p>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
