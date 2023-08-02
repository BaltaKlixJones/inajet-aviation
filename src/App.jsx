import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Flota from "./pages/Flota/Flota";
import Services from "./pages/Services/Services";
import Footer from "./pages/Footer/Footer";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/flota" element={<Flota/>} />
        <Route exact path="/services" element={<Services/>} />
      </Routes>
    
      <Footer />
    </>
  );
}

export default App;
