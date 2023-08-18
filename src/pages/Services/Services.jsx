import React from 'react';
import "./Services.css";
import businessJet from "../../assets/images/services/businessjet1.jpg"
import traslado from "../../assets/images/services/traslado1.jpg"
import refuel from "../../assets/images/services/refuel.avif"
import consulting from "../../assets/images/services/consulting1.jpg"
import {useTranslation} from 'react-i18next';

const Services = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
    <div className='fondo-service'>
      <div className= "gradient-overlay6"></div>
    <div className="services-container">
      <section className="service">
        <img src={businessJet} alt="Vuelos Ejecutivos" loading='lazy' />
        <h3>{t("services.vuelosEjecutivos")}</h3>
        <p>{t("services.textEjecutivos")}</p>
      </section>

      <section className="service">
        <img src={traslado} alt="Vuelos Sanitarios" loading='lazy'/>
        <h3>{t("services.vuelosSanitarios")}</h3>
        <p>{t("services.textSanitary")}</p>
      </section>

      <section className="service">
        <img src={refuel} alt="Soporte en Tierra" loading='lazy'/>
        <h3>{t("services.soporteTierra")}</h3>
        <p>{t("services.textTierra")}</p>
      </section>

      <section className="service">
        <img src={consulting} alt="Asesoramiento"loading='lazy' />
        <h3>{t("services.asesoramiento")}</h3>
        <p>{t("services.textAsesoramiento")}</p>
      </section>
    </div>
    
    </div>
    <div className='gradient-overlay-services'></div>
    </>
  );
}

export default Services;
