import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";
import { NavbarConteiner } from "./styled";
import logo from "../../assets/images/logomp.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  // return (
  //   <NavbarConteiner>
  //     <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
  //       <div className="logo">
  //       <img  src={logo} alt="logo mp filmes" />
  //       <p>MP Flix</p>
  //       </div>
  //     </Link>
  //     <div className="menu-icon" onClick={handleClick}>
  //       <i className={click ? "fas fa-times" : "fas fa-bars"} />
  //     </div>

  //     <ul className={click ? "nav-menu active" : "nav-menu"}>
  //       <li className="nav-item">
  //         <Link to="/" className="nav-links" onClick={closeMobileMenu}>
  //           Home
  //         </Link>
  //       </li>
  //       <li
  //         className="nav-item"
  //         onMouseEnter={onMouseEnter}
  //         onMouseLeave={onMouseLeave}
  //       >
  //         <Link className="nav-links" onClick={closeMobileMenu}>
  //           filmes
  //         </Link>
  //         {/* {dropdown && <Dropdown />} */}
  //       </li>
    
  //     </ul>

  //     <div className={`nav-toggle ${isOpen && "open"}`}
  //       onClick={() => setIsOpen(!isOpen)}>
  //         <div className='bar'>

  //         </div>
  //       </div>
  //   </NavbarConteiner>
  return (
    <NavbarConteiner>
        <span className="logo">
        <img  src={logo} alt="logo mp filmes" />
        </span>
        <div className={`nav-items ${isOpen && "open"}`}>
        <li className="nav-item">
          <Link to="/">
            Home
      </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link >
            filmes
          </Link>
          {dropdown && <Dropdown />}
        </li>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}>
          <div className='bar'>
            
          </div>
        </div>
    </NavbarConteiner>
  );
}
export default Navbar;
