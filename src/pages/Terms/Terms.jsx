import React, { useState, useEffect } from "react";
import "./Terms.css";
import Loading from "../Loading/Loading";
import { useTranslation } from "react-i18next";
const Terms = () => {
  const [loading, setLoading] = useState(true);
  const [t, i18next] = useTranslation("global");

  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);
    if (loading) {
        return <Loading />;
      }


  return (
    <div className="container-terms">
      <div className="title-terms">
        <h1>{t("terms.title")}</h1>
      </div>
      <div className="terms">
        <h2>{t("terms.subtitle")}:</h2>
        <h3>{t("terms.info1")}</h3>
        <h2> {t("terms.security")}:</h2>
        <h3>{t("terms.info2")}</h3>
        <h2> {t("terms.title2")}:</h2>
        <h3>{t("terms.info3")}</h3>
      </div>
    </div>
  );
};

export default Terms;
