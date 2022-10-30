import React from "react";
import { Link } from "react-router-dom";

import { ContainerFooter, ContentFooter, ContainerRealized } from "./styled";

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <ContentFooter>
          <div className="list">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Ação</Link>
              </li>
              <li>
                <Link to="/">Comédia</Link>
              </li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>
                <Link to="/">Documentários</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Romance</Link>
              </li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>
                <Link to="/">Animação</Link>
              </li>
              <li>
                <Link to="/">Crime</Link>
              </li>
              <li>
                <Link to="/">Terror</Link>
              </li>
            </ul>
          </div>
        </ContentFooter>
      </ContainerFooter>
      <ContainerRealized>
        <p>Feito por:</p>
        <div>
          <a
            href="https://github.com/Peedrohenrique"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedro
          </a>
          <p>&</p>

          <a
            href="https://github.com/devMarilia"
            target="_blank"
            rel="noopener noreferrer"
          >
            devLia
          </a>
        </div>
      </ContainerRealized>
    </>
  );
};

export default Footer;
