import React from "react";
import { useAppContext } from "../../AppContext/Contex";
import { Cardss } from "./styled";

const Card = () => {
  const { films } = useAppContext();
  return (
    <Cardss>
      {films.map((film) => {
        return (
          <div className="card">
            <img src={film.image} alt="" className="image" />
          </div>
        );
      })}
    </Cardss>
  );
};

export default Card;
