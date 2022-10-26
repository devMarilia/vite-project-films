import styled from "styled-components";

export const ContainerDropdown = styled.div`
.dropdown-menu {
  width: 200px;
  position: absolute;
  top: 70px;
  right: 7rem ;
  list-style: none;
  text-align: start;
  background: var(--background-mobile-menu);
  z-index: 999 ;
}

.dropdown-menu li {
  background: var(--background-mobile-menu);
  cursor: pointer;
}

.dropdown-menu li:hover {
  background: var(--text-color-secondary);
  
}

.dropdown-menu.clicked {
  display: none;
}

.dropdown-link {

  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;
}

@media screen and (max-width: 960px) {
  .fa-caret-down {
    display: none;
  }
}

`