import React from "react";
import "./Contacto.css";
import Quienes from "../QuienesSomos/Quienes";

import {MdAirplaneTicket} from "react-icons/md";

const Contacto = () => {
  return (
    <>   

     <div className="container-contacto">
    <div className="contact-container">
      <br />
      <br />
      <br />
      <br />
    <Quienes />
        {/* <div className="title-contact">
          <h1>Respondemos lo más rápido posible!</h1>
          <MdAirplaneTicket className="icono-contacto"/>
        </div> */}
      <form action="">
        <div className="label">
          

          <label htmlFor="">Nombre </label>
          <input
            type="text"
            className="input-field-contacto"
            placeholder="Nombre"
            />
          <label htmlFor="">Apellido </label>
          <input
            type="text"
            className="input-field-contacto"
            placeholder="Apellido"
            />
        <div className="label">
          <label htmlFor=""> Email</label>
          <input
            type="text"
            className="input-field-contacto"
            placeholder="Email"
            />
            </div>
            
        </div>
        <div className="inputs2">
        <div className="label">
          <label htmlFor="">Telefono</label>
          <input
            type="text"
            className="input-field-contacto"
            placeholder="Teléfono"
          />
        </div>
        <div className="label">
          <label htmlFor="">Mensaje</label>
          <input
            type="text"
            className="input-field-contacto"
            placeholder="Mensaje"
          />
        </div>
        </div>
        <div className="btn-send">
          <input type="submit" className="submit-button" value="Enviar" />
        </div>
      </form>
    </div>
  </div>
  </>

  );
};

export default Contacto;
