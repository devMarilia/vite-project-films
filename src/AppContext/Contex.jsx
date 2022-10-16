import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const ContextProvider = ({ children }) => {
  // Todos os States com dados das API'S
  const [films, setFilms] = useState([]);
  const [filmsComedia, setFilmsComedia] = useState([]);

  // Parte de consumo de API'S
  async function getAll() {
    await api
      .get("/filmes")
      .then((res) => setFilms(res.data))
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
    await api
      .get(`/comedia`)
      .then((res) => setFilmsComedia(res.data))
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
  }

  useEffect(() => {
    getAll();
  }, []);

  const value = {
    films,
    filmsComedia,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
