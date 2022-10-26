import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const ContextProvider = ({ children }) => {
  // Todos os States com dados das API'S
  const [banner, setBanner] = useState([]);
  const [acao, setAcao] = useState([]);
  const [comedia, setComedia] = useState([]);
  const [documentario, setDocumentario] = useState([]);
  const [romance, setRomance] = useState([]);
  const [animacao, setAnimacao] = useState([]);
  const [crime, setCrime] = useState([]);
  const [terror, setTerror] = useState([]);

  // Parte de consumo de API'S
  async function getAll() {
    await api
      .get("/banner")
      .then((res) => setBanner(res.data))
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
    await api
      .get("/acao")
      .then((res) => setAcao(res.data))
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
    await api
      .get(`/comedia`)
      .then((res) => setComedia(res.data))
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
    await api
      .get(`/documentario`)
      .then((res) => setDocumentario(res.data))
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
    await api
      .get(`/romance`)
      .then((res) => setRomance(res.data))
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
    await api
      .get(`/animacao`)
      .then((res) => setAnimacao(res.data))
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
    await api
      .get(`/crime`)
      .then((res) => setCrime(res.data))
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
    await api
      .get(`/terror`)
      .then((res) => setTerror(res.data))
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
  }

  const lis = [
    {
      title: "Ação",
      items: acao,
    },
    {
      title: "Comédia",
      items: comedia,
    },
    {
      title: "Documentários",
      items: documentario,
    },
    {
      title: "Romance",
      items: romance,
    },
    {
      title: "Animação",
      items: animacao,
    },
    {
      title: "Crime",
      items: crime,
    },
    {
      title: "Terror",
      items: terror,
    },
  ];

  useEffect(() => {
    getAll();
  }, []);

  const value = {
    banner,
    lis,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
