import React, { useState, memo } from "react";
import { MenuItems } from "../../services/menuItems";
import { Link } from "react-router-dom";
import { ContainerDropdown } from "./styled";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ContainerDropdown>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path + item.title}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </ContainerDropdown>
  );
}

export default memo(Dropdown);
