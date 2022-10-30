import React, { useState, useEffect } from "react";
import Text from "../components/Text";
import { useParams } from "react-router-dom";
import api from "../services/api";

function Genre() {
  let { name } = useParams();

  const [films, setFilms] = useState([]);
  const [filmName, setFilmName] = useState("");

  // Parte de consumo de API'S
  async function getAll() {
    if (name === "Comédia") {
      await api.get(`/api/comedia`).then((res) => setFilms(res.data));
      setFilmName("Comédia");
    } else if (name === "Documentários") {
      await api.get(`/api/documentario`).then((res) => setFilms(res.data));
      setFilmName("Documentários");
    } else if (name === "Ação") {
      await api.get(`/api/acao`).then((res) => setFilms(res.data));
      setFilmName("Ação");
    } else if (name === "Romance") {
      await api.get(`/api/romance`).then((res) => setFilms(res.data));
      setFilmName("Romance");
    } else if (name === "Animação") {
      await api.get(`/api/animacao`).then((res) => setFilms(res.data));
      setFilmName("Animação");
    } else if (name === "Crime") {
      await api.get(`/api/crime`).then((res) => setFilms(res.data));
      setFilmName("Crime");
    } else if (name === "Terror") {
      await api.get(`/api/terror`).then((res) => setFilms(res.data));
      setFilmName("Terror");
    }
  }

  useEffect(() => {
    getAll();
  }, [name]);

  return (
    <div className="container-pages">
      <section className="content-banner">
        <Text>{filmName}</Text>
        <span> {films.length} Filmes</span>
      </section>
      <div className="content-card-pages">
        {films.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="content" key={item.id}>
                <div className="card">
                  <img src={item.image} alt={item.nome} className="card-img" />
                </div>
                <div className="description-page" key={index}>
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
export default Genre;
