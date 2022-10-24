import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Details from "./pages/Details";
import Genre from "./pages/Genre";

function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/detalhes/:id" element={<Details />} />
      <Route path="/genero" element={<Genre />} />
    </Routes>
  );
}
export default MyRoutes;
