import React from "react";
import { ContainerBannerDetails } from "./styled";

const BannerDetils = ({ dados }) => {
  console.log(dados);
  return (
    <ContainerBannerDetails>
      <div className="content-datails">
        <div className="content-datails-items-image">
          <img className="image-details" src={dados.image} />
        </div>
        <div className="content-datails-items">
          <div className="items-datails">
            <h3>{dados.name}</h3>
            <span>10/15/2022</span>
            <h4>Sinopse</h4>
            <article>{dados.description}</article>
          </div>
        </div>
      </div>
    </ContainerBannerDetails>
  );
};

export default BannerDetils;
