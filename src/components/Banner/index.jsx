import React, { memo } from "react";
import { useAppContext } from "../../AppContext/Contex";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Container } from "./styled";

//slider reactjs useAppContext

const Banner = () => {
  const { banner } = useAppContext();
  //slider
  const [slider, setSlider] = React.useState(0);
  const bannerLength = banner.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setSlider(slider === bannerLength - 1 ? 0 : slider + 1);
  };

  const prevSlide = () => {
    setSlider(slider === 0 ? bannerLength - 1 : slider - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  React.useEffect(() => {
    setSlider(0);
  }, []);

  React.useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [slider]);

  return (
    //slider
    <Container>
      {/* <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} /> */}
      {banner.map((slide, index) => {
        return (
          <div
            className={index === slider ? "slide current" : slide}
            key={index}
          >
            {index === slider && (
              <div>
                {slide.image && (
                  <div className="imageSlide">
                    <img src={slide.image} alt={slide.name} className="image" />
                    {/* <div className="content">
                      <h2>{slide.name}</h2>
                      <p>{slide.description}</p>
                    </div> */}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </Container>
  );
};

export default memo(Banner);
