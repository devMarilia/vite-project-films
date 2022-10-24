import React from "react";

import { useAppContext } from "../AppContext/Contex";
import List from "../components/ListCard";
import Text from "../components/Text";

function Genre() {
  const { filmsComedia } = useAppContext();

  return (
    <div className="container-pages">
      
      <section className="content-banner">
      <Text>Comedia</Text>
        <span> 100 Filmes</span>
      </section>
      <div className="content-card-pages">
        {filmsComedia.map((item, index) => {
          return (
            <React.Fragment>
              <div className="content" key={item.id}>
                <div className="card" >
                  <img src={item.image} alt={item.nome} className="card-img" key={index} />
                </div>
                <div className="description-page" key={index}>
                  <div className="caption">
                  <h3 >
                    {item.name}
                  </h3>
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
export default Genre;
