import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Comedy from "./pages/Comedy";
import Details from "./pages/Details";

function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/detalhes:id" element={<Details />} />
      <Route path="/comedia" element={<Comedy />} />
    </Routes>
  );
}
export default MyRoutes;
