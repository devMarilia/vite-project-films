import React from "react";

import { useAppContext } from "../AppContext/Contex";
import List from "../components/ListCard";
import Text from "../components/Text";

function Comedy() {
  const { filmsComedia } = useAppContext();
  console.log(filmsComedia);

  return (
    <div className="container-pages">
      <div className="content-card-pages">
        <h1>Comédia</h1>
        {filmsComedia.map((item, key) => {
          return (
            <React.Fragment>
              <div className="content" key={item.id}>
                <div className="card">
                  <img src={item.image} alt={item.nome} className="card-img" />
                </div>
                <div className="description-page">
                  <div className="caption">
                    <h3>{item.name}</h3>
                    <span>10/15/2022</span>
                  </div>

                  <div className="caption">
                    <article>{item.description}</article>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
export default Comedy;
