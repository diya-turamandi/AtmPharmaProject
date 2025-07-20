import React from "react";
import { Link } from "react-router-dom";
import "../Style/style.css"; // Importing styles

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nava">
        <Link className="nav-link" to="/">HOME</Link>
        <Link className="nav-link" to="/services">SERVICES</Link>
        <Link className="nav-link" to="/infra">INFRASTRUCTURE</Link>
        <Link className="nav-link" to="/comp">COMPANY LIST</Link>
        <Link className="nav-link" to="/career">CAREER</Link>
        <Link className="nav-link" to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default Navbar;
