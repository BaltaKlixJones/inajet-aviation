import React, { useState, useEffect} from "react";
import "./Flota.css";
import { useDispatch } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { getAllAirCrafts } from "../../redux/Actions";
import Loading from "../Loading/Loading";


const Flota = () => {
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
          <span style={{ fontWeight: "bold", marginRight: "15px" }}>VIVÍ</span>
          LA EXPERIENCIA  INAJET
        </h1>
       
      </div>
      <div className="gradient-overlay"></div>
    </div>
    {/* <h1 className="titulo-flota" style={{display:"flex", alignItems:"center", justifyContent: "center"}}>FLOTA</h1> */}
      <div className="container-cards">

      <Cards />
      </div>
</>
  );
};

export default Flota;
