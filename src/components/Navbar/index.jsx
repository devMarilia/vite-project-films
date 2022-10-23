import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarConteiner } from "./styled";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavbarConteiner>
      <span className="logo">Mape Movies</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">Home</Link>
        <Link to="/comedia">Comedy</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </NavbarConteiner>
  );
}
export default Navbar;
