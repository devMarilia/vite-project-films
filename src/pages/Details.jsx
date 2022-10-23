import React, { useState, useEffect } from "react";
import BannerDetils from "../components/BannerDetails";
import { useParams } from "react-router-dom";
import api from "../services/api";

const Details = () => {
  let { id } = useParams();
  // Todos os States com dados das API'S
  const [banner, setBanner] = useState([]);
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
    }
    if (id >= 201) {
      await api
        .get(`/comedia/${id}`)
        .then((res) => setFilms(res.data))
        .catch((error) => {
          console.error("ops! ocorreu um erro " + error);
        });
    }
  }
  //console.log(films);
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
