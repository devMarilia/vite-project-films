import React from "react";
import { useAppContext } from "../../AppContext/Contex";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import FeaturedBanner from "../FeaturedBanner";
import Text from "../Text";
import { MovieRow} from "./styled";

const Card = () => {
  const { films } = useAppContext();
  const ref = React.useRef(null);

  const [scrollX, setScrollX] = React.useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = films.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };
  return (
    <MovieRow>
      <div className="movieRow-left" onClick={handleLeftArrow}>
        <AiOutlineArrowLeft  />
      </div>
      <div className="movieRow-right" onClick={handleRightArrow}>
        <AiOutlineArrowRight  />
      </div>

      <div className="movieRow-listarea">
        <div
          className="movieRow-list"
          style={{
            marginLeft: scrollX,
            width: films.length * 150,
          }}
        >
         {films.map((film) => {
            return (
              <div key={film.id}>
                <img src={film.image} alt="" className="image" />
              </div>
            );
          })}
        </div>
        </div>

        
      </MovieRow>
  );
};

export default Card;
