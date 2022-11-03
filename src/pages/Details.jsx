import React, { useState, useEffect, memo } from "react";
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
        .get(`/api/acao/${id}`)
        .then((res) => setFilms(res.data))
        .catch((error) => {
          console.error("ops! ocorreu um erro " + error);
        });
    } else if (id <= 400) {
      await api
        .get(`/api/comedia/${id}`)
        .then((res) => setFilms(res.data))
        .catch((error) => {
          console.error("ops! ocorreu um erro " + error);
        });
    } else if (id <= 600) {
      await api
        .get(`/api/documentario/${id}`)
        .then((res) => setFilms(res.data))
        .catch((error) => {
          console.error("ops! ocorreu um erro " + error);
        });
    } else if (id <= 800) {
      await api
        .get(`/api/romance/${id}`)
        .then((res) => setFilms(res.data))
        .catch((error) => {
          console.error("ops! ocorreu um erro " + error);
        });
    } else if (id <= 1000) {
      await api
        .get(`/api/animacao/${id}`)
        .then((res) => setFilms(res.data))
        .catch((error) => {
          console.error("ops! ocorreu um erro " + error);
        });
    } else if (id <= 1200) {
      await api
        .get(`/api/crime/${id}`)
        .then((res) => setFilms(res.data))
        .catch((error) => {
          console.error("ops! ocorreu um erro " + error);
        });
    } else if (id <= 1400) {
      await api
        .get(`/api/terror/${id}`)
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
    </>
  );
};

export default memo(Details);
