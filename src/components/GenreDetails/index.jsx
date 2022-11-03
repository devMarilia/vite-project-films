import React, { memo } from "react";
import { Link } from "react-router-dom";
import Text from "../../components/Text";

function GenreDetails({ filmName, films }) {
  return (
    <div className="container-pages">
      <section className="content-banner">
        <Text>{filmName}</Text>
        <Text>
          <span> {films.length} Filmes</span>
        </Text>
      </section>
      <div className="content-card-pages">
        {films.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="content" key={item.id}>
                <Link to={"/detalhes/" + item.id}>
                  <div className="card">
                    <img
                      src={item.image}
                      alt={item.nome}
                      className="card-img"
                    />
                  </div>
                </Link>
                <div className="description-page" key={index}>
                  <div className="caption">
                    <h3>{item.name}</h3>
                    <span>{item.year}</span>
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
export default memo(GenreDetails);
