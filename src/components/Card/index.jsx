import React from "react";
import { useAppContext } from "../../AppContext/Contex";
import Text from "../Text" 
import { ContainerCard, Cards } from "./styled";

const Card = () => {
  const { films } = useAppContext();
  return (
    <ContainerCard>
      <Text>Novidades</Text>
      <Cards>
      {films.map((film) => {
        return (
          <div className="card">
            <img src={film.image} alt="" className="image" />
          </div>
        );
      })}
    </Cards>
    <Text>Top 10</Text>
      <Cards>
      {films.map((film) => {
        return (
          <div className="card">
            <img src={film.image} alt="" className="image" />
          </div>
        );
      })}
    </Cards>
    <Text>Recomendados</Text>
      <Cards>
      {films.map((film) => {
        return (
          <div className="card">
            <img src={film.image} alt="" className="image" />
          </div>
        );
      })}
    </Cards>
    
    </ContainerCard>
  );
};

export default Card;
