import React, { useState, useEffect} from "react";
import "./Flota.css";
import { useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { getAllAirCrafts } from "../../redux/Actions";
import Loading from "../Loading/Loading";
import { useTranslation } from "react-i18next";

const Flota = () => {
  const [t, i18n] = useTranslation("global");
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAirCrafts())
    // setTimeout(() => {
    //   setLoading(false)
    // }, 1000)
    .then(() => {
      setLoading(false)
    })
  },[])

  if(loading) return <Loading/>

  return (
    <>
    <div className="container-flota">
      <div className="container-titulo">
        <h1 className="titulo-flota">
          <span style={{ fontWeight: "bold", marginRight: "15px" }}>{t("text.live")}</span>
          {t("text.experience")}{" "} INAJET
        </h1>
       
      </div>
      <div className="gradient-overlay"></div>
    </div>
    {/* <h1 className="titulo-flota" style={{display:"flex", alignItems:"center", justifyContent: "center"}}>FLOTA</h1> */}
      

      <Cards />
     
</>
  );
};

export default Flota;
