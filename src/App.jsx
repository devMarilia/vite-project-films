import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/globalstyles";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
