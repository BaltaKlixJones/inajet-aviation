import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Flota from "./pages/Flota/Flota";
import Services from "./pages/Services/Services";
import Footer from "./pages/Footer/Footer";
import Perfil from "./pages/Perfil/Perfil";
import Loading from "./pages/Loading/Loading";
import axios from "axios";
import Contacto from "./pages/Contacto/Contacto";
axios.defaults.baseURL = "http://localhost:3001";
function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/flota" element={<Flota/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/aircraft/:id" element={<Perfil/>} />
        <Route exact path="/loading" element={<Loading/>} />
        <Route exact path="/consultar/:id" element={<Home/>} />
        <Route exact path="/contacto" element={<Contacto/>} />
      </Routes>
    
      <Footer />
    </>
  );
}

export default App;
