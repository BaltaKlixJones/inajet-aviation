import React, { useState, useEffect } from "react";
import "./Flota.css";
import { useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { getAllAirCrafts } from "../../redux/Actions";
import Loading from "../Loading/Loading";
import { useTranslation } from "react-i18next";

const Flota = () => {
  const [t, i18n] = useTranslation("global");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAirCrafts()).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="container-flota">
        <div className="container-titulo">
          <h1 className="titulo-flota">
            <span style={{ fontWeight: "bold", marginRight: "15px" }}>
              {t("text.live")}
            </span>
            {t("text.experience")} INAJET
          </h1>
        </div>
        <div className="gradient-overlay"></div>
      </div>
      <Cards />
      <div className="container_aclaracion">
        <h5>{t("text.aclaracion")}</h5>
      </div>
    </>
  );
};

export default Flota;
