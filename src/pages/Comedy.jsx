import React from "react";

import { useAppContext } from "../AppContext/Contex";
import List from "../components/ListCard";

function Comedy() {
  const { filmsComedia } = useAppContext();

  return (
    <div class="card-container">
      <div class="content">
        {filmsComedia.map((item, index) => {
          return (
            <div class="card">
              <img src={item.image} alt={item.nome} class="card-img" />
              <span class="caption">This is an image caption for image 11</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Comedy;
