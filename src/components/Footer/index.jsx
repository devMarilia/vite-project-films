import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { ContainerFooter, ContentFooter } from "./styled";

const Footer = () => {
  return (
    <ContainerFooter>
      <ContentFooter>
       
        <div className="list">
   

          <ul>
            <li>
              <a href="https://www.google.com">Google</a>
            </li>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="https://www.google.com">Google</a>
            </li>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="https://www.google.com">Google</a>
            </li>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
          </ul>
        </div>
      </ContentFooter>
      <div className="icon-rede-social">
          <a>
            <AiFillGithub />
          </a>
          <a href="https://">
            <AiFillInstagram />
          </a>
          <a href="https://">
            <AiFillLinkedin />
          </a>
        </div>
    </ContainerFooter>
  );
};

export default Footer;
