import React from "react";
import { useAppContext } from "../../AppContext/Contex";
import List from "../ListCard";

function Card() {
  const { lis } = useAppContext();

  return (
    <div>
      {lis.map((item, key) => {
        return (
          <div key={item.key}>
            <List title={item.title} films={item.items} />
          </div>
        );
      })}
    </div>
  );
}

export default Card;
