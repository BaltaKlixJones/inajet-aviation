import React from "react";
import "./Flota.css";
import Cards from "../../components/Cards/Cards";


const Flota = () => {
  return (
    <>
    <div className="container-flota">
      <div className="container-titulo">
        <h1 className="titulo-flota">
          <span style={{ fontWeight: "bold", marginRight: "15px" }}>VIVÍ</span>
          LA EXPERIENCIA  INAJET
        </h1>
       
      </div>
      <div className="gradient-overlay"></div>
    </div>
    {/* <h1 className="titulo-flota" style={{display:"flex", alignItems:"center", justifyContent: "center"}}>FLOTA</h1> */}
      <div className="container-cards">

      <Cards />
      </div>
</>
  );
};

export default Flota;
