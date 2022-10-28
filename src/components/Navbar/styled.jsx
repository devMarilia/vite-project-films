import styled from "styled-components";

export const NavbarConteiner = styled.header`
  height: 50px;
  width: 100;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  border-bottom: 1px solid var(--background-mobile-menu);
  .logo {
    padding-top: 10px;

    > img {
      width: 90px;
      height: 5rem;
    }
  }

  .nav-items a {
    color: var(--text-color-secondary);
    font-size: 16px;
    text-decoration: none;
    margin: 15px;
    position: relative;
    opacity: 0.9;
  }
  .nav-items a:hover {
    opacity: 1;
  }
  .nav-toggle {
    display: none;
  }
  .nav-items {
    display: flex;
  }
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
  }

  .nav-item {
    display: flex;
    align-items: center;
    height: 80px;
  }

  .nav-links {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }

  .nav-links:hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
  .menu-items-mobile {
    display: none;
  }
  @media (max-width: 700px) {
    border-bottom: 100%;
    padding: 20px ;
    .nav-items {
      position: absolute;
      top: 90px;
      display: flex;
      flex-direction: column;
      background: #fff;
      z-index: 999;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      transition: all 0.45s;
    }
    .nav-item {
      height: 34px ;
    }
    nav-items > a::before {
      background: transparent;
    }
    .nav-items.open {
      transform: translateX(0);
    }
    .nav-toggle {
      display: flex;
      width: 50px;
      height: 50px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .nav-toggle > .bar {
      position: relative;
      width: 32px;
      height: 2px;
      background: var(--text-color-secondary);
      transition: all 0.45s ease-in-out;
    }
    .nav-toggle > .bar::before,
    .nav-toggle > .bar::after {
      content: "";
      position: absolute;
      height: 2px;
      background: var(--text-color-secondary);
      border-radius: 2px;
      transition: all 0.45s ease-in-out;
    }
    .nav-toggle .bar::before {
      width: 25px;
      transform: translateY(-8px);
      right: 0;
    }
    .nav-toggle > .bar::after {
      width: 32px;
      transform: translateY(8px);
    }
    .nav-toggle.open > .bar {
      transform: translateX(-40px);
      background: transparent;
    }
    .nav-toggle.open > .bar::before {
      width: 32px;
      transform: rotate(45deg) translate(26px, -26px);
    }
    .nav-toggle.open > .bar::after {
      transform: rotate(-45deg) translate(26px, 26px);
    }
    .menu-items-mobile {
      display: block;
    }
    .film{
      display:none;
    }
    .menu-items-mobile{
      padding: 10px 0;
    }
    .nav-item-li-web {
      display: none ;
    }
    .item-li-mobile{
      padding: 0.5rem ;
    }
  }
`;
