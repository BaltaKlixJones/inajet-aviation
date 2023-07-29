import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Flota from "./pages/Flota/Flota";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/flota" element={<Flota/>} />
        
      </Routes>
    </>
  );
}

export default App;
