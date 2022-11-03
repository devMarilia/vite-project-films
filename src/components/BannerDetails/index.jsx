import React, { memo } from "react";
import { Link } from "react-router-dom";
import { ContainerBannerDetails } from "./styled";

const BannerDetils = ({ dados }) => {
  return (
    <ContainerBannerDetails>
      <div className="content-datails">
        <div className="content-datails-items-image">
          <Link to="/">
            <img className="image-details" src={dados.image} />
          </Link>
        </div>
        <div className="content-datails-items">
          <div className="items-datails">
            <h3>{dados.name}</h3>
            <span className="cordoano">{dados.year}</span>

            <h4 className="sinopse">Sinopse</h4>
            <article className="artigo">{dados.description}</article>
          </div>
        </div>
      </div>
    </ContainerBannerDetails>
  );
};

export default memo(BannerDetils);
