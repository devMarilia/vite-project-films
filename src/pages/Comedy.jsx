import React from "react";

import { useAppContext } from "../AppContext/Contex";
import List from "../components/ListCard";
import Text from "../components/Text";

function Comedy() {
  const { filmsComedia } = useAppContext();

  return (
    <div className="container-pages">
      <section className="content-banner">
        <Text>Comedia</Text>
        <span> 100 Filmes</span>
      </section>
      <div class="content-card-pages">
        {filmsComedia.map((item, index) => {
          return (
            <React.Fragment>
              <div class="content">
                <div class="card">
                  <img src={item.image} alt={item.nome} class="card-img" />
                </div>
                <div className="description-page">
                  <div class="caption">
                  <h3 >
                    {item.name}
                  </h3>
                  <span>10/15/2022</span>
                  </div>
                  
                 <div class="caption">
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
