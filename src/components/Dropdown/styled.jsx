import styled from "styled-components";

export const ContainerDropdown = styled.div`
.dropdown-menu {
  width: 200px;
  position: absolute;
  top: 83px;
  right: 1rem ;
  list-style: none;
  text-align: start;
  background: #fff;
  z-index: 999 ;
}

.dropdown-menu li {
  background: #fff;
  cursor: pointer;
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