import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/globalstyles";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./router";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <MyRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
