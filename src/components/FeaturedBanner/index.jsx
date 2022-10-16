import React from "react";
import image01 from "../../assets/images/image01.jpg";
import {ContainerFeaturedBanner} from './styled'

const FeaturedBanner = () => {
  return (
    <ContainerFeaturedBanner>
      <div>
        <img src={image01} alt="banner image001" />
      </div>
    </ContainerFeaturedBanner>
  );
};

export default FeaturedBanner;
