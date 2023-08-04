import React, { useEffect } from "react";
import "./Perfil.css";

import { getAirCraftById } from "../../redux/Actions";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PiToiletLight } from "react-icons/pi";
import { BsSpeedometer2 } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiRadarSweep } from "react-icons/gi";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { MdOutlineAirplaneTicket } from "react-icons/md";
const Perfil = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const aircraft = useSelector((state) => state.aircraft);

  useEffect(() => {
    dispatch(getAirCraftById(id));
  }, [dispatch, id]);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
    <div className="container-profile">
    <div className="container-fondo">

    

      <div className="titulo-aircraft">
        <h1>{aircraft.name}</h1>
      </div>
      <div className="container-profile-inicio">
        <img src={aircraft.image} alt="" className="imagen" />
        <img src={aircraft.imgInterior} alt="" className="imagen2" />
      </div>
      <div className="inicio-description">
        <div className="iconos">
          <BiSolidPlaneAlt
            style={{ fontSize: "34px", marginTop: "10px", marginRight: "5px" }}
            />
          <h2>{aircraft.type}</h2>
        </div>
        <div className="iconos">
          <BsSpeedometer2
            style={{ fontSize: "34px", marginTop: "10px", marginRight: "5px" }}
            />
          <h2> {aircraft.speed}</h2>
        </div>
      </div>
      <div className="interior">
        <div className="interior-description">
          <div className="iconos">
            <AiOutlineUsergroupAdd
              style={{ fontSize: "34px", marginRight: "5px" }}
              />
            <h3> {aircraft.capacity}</h3>
          </div>
          <div className="iconos">
            <PiToiletLight style={{ fontSize: "34px", marginRight: "5px" }} />
            <h3>{aircraft.toilet}</h3>
          </div>
        </div>
      </div>
      {/* <div className="gradient-overlay2"></div> */}
      <hr style={{ width: "40%", marginTop: "20px", marginBottom: "20px" }} />{" "}
      <MdOutlineAirplaneTicket
        style={{ fontSize: "34px", marginLeft: "-80px", marginRight: "-80px" }}
        />
      <hr style={{ width: "40%", marginTop: "20px", marginBottom: "20px" }} />
      </div>


  
      {/* <div className="gradient-overlay3"></div> */}
      <div className="container-range">
        <div className="range">
          <img src={aircraft.rangeRing} alt="" className="imagen-ring" />
          <div className="range-description">
            <div className="titulo-range">
              <h1 id="range-title">Range</h1>
            </div>
            <h1>
              <GiRadarSweep /> {aircraft.range}
            </h1>
            <h5>
              Aclaración: Esta herramienta es solo para fines de comparación.
              Rango calculado sin viento en ruta y con atmósfera estándar. Fue
              tomado como referencia el Aeroparque Jorge Newbery, Buenos Aires
              Argentina
            </h5>
          </div>
        </div>
      <div className="btn-reservar">
        <button className="btn" onClick={handleClick}>
          <span className="iconos2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              fill="currentColor"
              className="bi bi-airplane-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"></path>
            </svg>
          </span>

          <span className="text">Consultar</span>
        </button>
      </div>
      </div>
     
    </div>
      <div className="gradient-overlay4"></div>
      </>
  );
};

export default Perfil;
