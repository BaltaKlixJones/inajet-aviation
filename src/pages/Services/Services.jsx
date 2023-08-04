import React from 'react';
import "./Services.css";
import businessJet from "../../assets/images/services/businessJet.jpg"
import traslado from "../../assets/images/services/traslado.jpg"
import refuel from "../../assets/images/services/refuel.avif"
import consulting from "../../assets/images/services/consulting.jpg"

const Services = () => {
  return (
    <div className='fondo-service'>
      <div className= "gradient-overlay6"></div>
    <div className="services-container">
      <section className="service">
        <img src={businessJet} alt="Vuelos Ejecutivos" />
        <h2>Vuelos Ejecutivos</h2>
        <p>Realizamos traslados a cualquier parte del mundo. Con una amplia variedad de aeronaves, le brindamos al cliente la posibilidad de reservar un vuelo en cualquier momento y con el mejor soporte.</p>
      </section>

      <section className="service">
        <img src={traslado} alt="Vuelos Sanitarios" />
        <h2>Vuelos Sanitarios</h2>
        <p>Coordinamos vuelos sanitarios y traslados aéreos de órganos.</p>
      </section>

      <section className="service">
        <img src={refuel} alt="Soporte en Tierra" />
        <h2>Soporte en Tierra</h2>
        <p>¿Necesitas asistencia en tierra? Contáctanos.</p>
      </section>

      <section className="service">
        <img src={consulting} alt="Asesoramiento" />
        <h2>Asesoramiento</h2>
        <p>¿Quieres comprar o vender un avión? Nosotros te asesoramos.</p>
      </section>
    </div>
    </div>
  );
}

export default Services;
