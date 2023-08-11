import React from "react";
import "./Contacto.css";
import Quienes from "../QuienesSomos/Quienes";
import ContactComponent from "../../components/ContactoComponent/ContactComponent";
import { MdAirplaneTicket } from "react-icons/md";

const Contacto = () => {
  return (
    <div className="fondo-contacto">
      <div className="trasfondo-contacto">
        <br />
        <br />
        <br />
        <br />
        <br />
        <Quienes />
        <ContactComponent />
      </div>
    </div>
  );
};

export default Contacto;
