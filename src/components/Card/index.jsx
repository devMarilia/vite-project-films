import React, { useRef } from "react";
import { useAppContext } from "../../AppContext/Contex";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import FeaturedBanner from "../FeaturedBanner";
import Text from "../Text";
import { ContainerCard, Cards, Scroll } from "./styled";

const Card = () => {
  const { films, filmsComedia } = useAppContext();
  const scroll = useRef(null);
  const a = useRef(null);
  const b = useRef(null);

  const nextSlide = (e) => {
    e.preventDefault();
    scroll.current.scrollLeft += scroll.current.offsetWidth;
  };

  const prevSlide = (e) => {
    e.preventDefault();
    scroll.current.scrollLeft -= scroll.current.offsetWidth;
  };

  return (
    <ContainerCard>
      <Text>Novidades</Text>
      <Cards>
        <Scroll>
          <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
          <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
        </Scroll>
        <div className="card" ref={scroll}>
          {films.map((film) => {
            return (
              <div key={film.id}>
                <img src={film.image} alt="" className="image" />
              </div>
            );
          })}
        </div>
      </Cards>

      <Text>Top 10</Text>
      <Cards>
      <Scroll>
          <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
          <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
        </Scroll>
        <div className="card" ref={a}>
          {films.map((film) => {
            return (
              <div>
                <img src={film.image} alt="" className="image" />
              </div>
            );
          })}
        </div>
      </Cards>

      <FeaturedBanner />
      
      <Text>Comédia</Text>
      <Cards>
        <div className="card" ref={b}>
          {filmsComedia.map((film) => {
            return (
              <div>
                <img src={film.image} alt="" className="image" />
              </div>
            );
          })}
        </div>
      </Cards>
   
    </ContainerCard>
  );
};

export default Card;
