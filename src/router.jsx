import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Comedy from "./pages/Comedy";

function MyRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/comedia" element={<Comedy />} />
    </Routes>
  );
}
export default MyRoutes;
