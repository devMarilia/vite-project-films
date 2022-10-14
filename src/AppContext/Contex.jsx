import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const ContextProvider = ({ children }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const allItemsFilms = async () => {
      const response = await api.get("/filmes");
      const responseArr = Object.values(response.data);
      setFilms(responseArr || []);
      console.log("RESPONSE", responseArr);
    };
    return allItemsFilms;
  }, []);

  const value = {
    setFilms,
    films,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
