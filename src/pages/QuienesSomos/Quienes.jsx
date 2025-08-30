import React, { useState } from "react";
import "./Quienes.css";
import { useTranslation } from "react-i18next";

const Quienes = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="container-quienes">
      <div className="section">
        <h1 className="section-title">{t("contact.quienesSomosTitle")}</h1>
        <p className="section-text">{t("contact.quienesSomos")}</p>
      </div>
      {/* <div className="section">
          <h1 className="section-title">{t("contact.brokerTitle")}</h1>
          <h3 className="section-text">
          {t("contact.broker")}
          </h3>
        </div>
        <div className="section">
          <h1 className="section-title">{t("contact.porqueInajetTitle")}</h1>
          <h3 className="section-text">
          {t("contact.porqueInajet")}
          </h3>
        </div> */}
    </div>
  );
};

export default Quienes;
