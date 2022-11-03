import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";
import { MenuItems } from "../../services/menuItems";
import { NavbarConteiner } from "./styled";
import logo from "../../assets/images/logomp.png";

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

  return (
    <NavbarConteiner>
      <span className="logo">
        <img src={logo} alt="logo mp filmes" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <li className="nav-item nav-item-li-web">
          <Link to="/">Home</Link>
        </li>
        <li
          className="nav-item film"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link>filmes</Link>
          {dropdown && <Dropdown />}
        </li>
        <div className="menu-items-mobile" onClick={() => setIsOpen(!isOpen)}>
          <li>
            <Link className="item-li-mobile">Home</Link>
          </li>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="item-li-mobile">
                <Link
                  className={item.cName}
                  to={item.path + item.title}
                  onClick={() => setIsOpen(isOpen)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </div>
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
