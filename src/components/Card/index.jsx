import React from "react";
import { useAppContext } from "../../AppContext/Contex";
import { Cards } from "./styled";

const Card = () => {
  const { films } = useAppContext();
  return (
    <Cards>
      {films.map((film) => {
        return (
          <div className="card">
            <img src={film.image} alt="" className="image" />
          </div>
        );
      })}
    </Cards>
  );
};

export default Card;
