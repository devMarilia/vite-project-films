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
