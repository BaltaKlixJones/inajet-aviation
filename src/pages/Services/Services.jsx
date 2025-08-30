import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import businessJet from "../../assets/images/services/businessjet1.jpg";
import aviationsParts from "../../assets/images/services/aviations-parts.jpg";
import refuel from "../../assets/images/services/refuel.avif";
import consulting from "../../assets/images/services/consulting1.jpg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [t] = useTranslation("global");
  const navigate = useNavigate();

  const services = [
    {
      slug: "private-flights",
      img: businessJet,
      titleKey: "services.vuelosEjecutivos",
      textKey: "services.textEjecutivos",
      alt: "Vuelos Ejecutivos",
    },
    {
      slug: "aviations-parts",
      img: aviationsParts,
      titleKey: "services.vuelosSanitarios",
      textKey: "services.textSanitary",
      alt: "Vuelos Sanitarios",
    },
    {
      slug: "ground-support",
      img: refuel,
      titleKey: "services.soporteTierra",
      textKey: "services.textTierra",
      alt: "Soporte en Tierra",
    },
    {
      slug: "aviation-consulting",
      img: consulting,
      titleKey: "services.asesoramiento",
      textKey: "services.textAsesoramiento",
      alt: "Asesoramiento",
    },
  ];

  const goTo = (slug) => navigate(`/contact/${slug}`);

  return (
    <>
      <div className="fondo-service">
        <div className="gradient-overlay6"></div>
        <div className="services-container">
          {services.map((s) => (
            <section
              style={{ cursor: "pointer" }}
              key={s.slug}
              className="service clickable"
              role="button"
              tabIndex={0}
              onClick={() => goTo(s.slug)}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && goTo(s.slug)
              }
            >
              <img src={s.img} alt={s.alt} loading="lazy" />
              <h3>{t(s.titleKey)}</h3>
              <p>{t(s.textKey)}</p>
            </section>
          ))}
        </div>
      </div>
      <div className="gradient-overlay-services"></div>
    </>
  );
};

export default Services;
