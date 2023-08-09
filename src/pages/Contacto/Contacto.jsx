import React from "react";
import "./Contacto.css";
import {MdAirplaneTicket} from "react-icons/md";

const Contacto = () => {
  return (
    <div className="container-contacto">
    <div className="contact-container">
        <div className="title-contact">
          <h1>Respondemos lo más rápido posible!</h1>
          <MdAirplaneTicket className="icono-contacto"/>
        </div>
      <form action="">
        <div className="label">
          <label htmlFor="">Nombre y apellido</label>
          <input
            type="text"
            className="input-field-contacto"
            placeholder="Nombre"
          />
        </div>
        <div className="label">
          <label htmlFor=""> Email</label>
          <input
            type="text"
            className="input-field-contacto"
            placeholder="Email"
          />
        </div>
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
        <div className="btn-send">
          <input type="submit" className="submit-button" value="Enviar" />
        </div>
      </form>
    </div>
  </div>
    
  );
};

export default Contacto;
