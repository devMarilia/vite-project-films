import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import GlobalStyle from "./styles/globalstyles";


function App() {

  return (
    <div>
      <BrowserRouter>
      <GlobalStyle/>
        <Navbar/>
      </BrowserRouter>
    </div>
  )
}

export default App
