import React, { useState, useEffect } from "react";
import BannerDetils from "../components/BannerDetails";
import { useParams } from "react-router-dom";
import api from "../services/api";

const Details = () => {
  let { id } = useParams();
  const [films, setFilms] = useState([]);

  // Parte de consumo de API'S
  async function getAll() {
    if (id < 200) {
      await api
        .get(`/filmes/${id}`)
        .then((res) => setFilms(res.data))
        .catch((error) => {
          console.error("ops! ocorreu um erro " + error);
        });
    } else if (id <= 400) {
      await api
        .get(`/comedia/${id}`)
        .then((res) => setFilms(res.data))
        .catch((error) => {
          console.error("ops! ocorreu um erro " + error);
        });
    } else if (id >= 401) {
      await api
        .get(`/documentario/${id}`)
        .then((res) => setFilms(res.data))
        .catch((error) => {
          console.error("ops! ocorreu um erro " + error);
        });
    }
  }

  useEffect(() => {
    getAll();
  }, [id]);

  return (
    <>
      <BannerDetils dados={films} />
      <div>Elencos</div>
    </>
  );
};

export default Details;
