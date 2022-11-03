import React, { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import GenreDetails from "../components/GenreDetails";
import api from "../services/api";

function Genre() {
  let { name } = useParams();

  const [films, setFilms] = useState([]);
  const [filmName, setFilmName] = useState("");

  // Parte de consumo de API'S
  async function getAll() {
    if (name === "Comédia") {
      await api
        .get(`/api/comedia`)
        .then((res) => setFilms(res.data))
        .catch((error) => {
          console.error("ops! ocorreu um erro " + error);
        });
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

  return <GenreDetails films={films} filmName={filmName} />;
}
export default memo(Genre);
