import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/globalstyles";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
