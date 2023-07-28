import React from "react";
import "./Home.css";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { BsFillCalendarRangeFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="container-home">
      <div className="titulo">
        <h1>VUELA CON NOSOTROS</h1>
      </div>
      <div className="form">
        <form action="">
          <div className="form-group">
            <label className="label-icon">
              <GiAirplaneDeparture className="icon" />
            </label>
            <input type="text" placeholder="DESTINO" className="input-field" />
          </div>
          <div className="form-group">
            <label className="label-icon">
              <GiAirplaneArrival className="icon" />
            </label>
            <input type="text" placeholder="VUELTA" className="input-field" />
          </div>
          <div className="form-group">
            <label className="label-icon">
              <BsFillCalendarRangeFill className="icon" />
            </label>
            <input type="date" placeholder="FECHA" className="input-field" />
          </div>
          <div className="form-group">
            <button className="submit-button">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;