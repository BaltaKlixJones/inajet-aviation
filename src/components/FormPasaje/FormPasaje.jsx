import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FormPasaje.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";
import { BiUserCircle, BiArrowBack } from "react-icons/bi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { CgCheckO } from "react-icons/cg";
import { MdNavigateNext } from "react-icons/md";

const FormPasaje = () => {
  const [count, setCount] = useState(0);
  const [origin, setOrigin] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [tripType, setTripType] = useState("Ida");
  const [minDate, setMinDate] = useState("");
  const [secondForm, setSecondForm] = useState(false);

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setMinDate(currentDate);
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSecondForm(true);
  };

  const handleOriginChange = async (e) => {
    const value = e.target.value;
    setOrigin(value);

    if (value.length > 2) {
      try {
        const response = await axios.get(
          `https://airport.api.aero/airport/city/${value}`,
          {
            headers: {
              apikey: "TU_API_KEY", // Reemplaza "TU_API_KEY" con tu clave de API
            },
          }
        );

        // Extraer los nombres de las ciudades de los resultados de la API
        const cityNames = response.data.airports.map((airport) => airport.city);
        console.log("sugerencias", cityNames);

        setSuggestions(cityNames);
      } catch (error) {
        console.error("Error fetching city suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };

  return (
    <div className="container-home">
      <div className="form">
        {!secondForm ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  value="Ida"
                  checked={tripType === "Ida"}
                  onChange={handleTripTypeChange}
                  required
                />
                <span className="span">IDA</span>
              </label>
              &nbsp;
              <label>
                <input
                  type="radio"
                  value="idayvuelta"
                  checked={tripType === "idayvuelta"}
                  onChange={handleTripTypeChange}
                  required
                />
                <span className="span">IDA Y VUELTA</span>
              </label>{" "}
              &nbsp;
              <label>
                <input
                  type="radio"
                  value="Multileg"
                  checked={tripType === "Multileg"}
                  onChange={handleTripTypeChange}
                  required
                />
                <span className="span">MULTILEG</span>
              </label>
            </div>
            <div className="form-group">
              <label className="label-icon">
                <GiAirplaneDeparture className="icon" />
              </label>
              <input
                type="text"
                placeholder="ORIGEN"
                value={origin}
                onChange={handleOriginChange}
                list="origin-suggestions"
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label className="label-icon">
                <GiAirplaneArrival className="icon" />
              </label>
              <input
                type="text"
                placeholder="DESTINO"
                className="input-field"
                required
              />
            </div>

            {tripType === "idayvuelta" && (
              <div>
                <div className="form-group">
                  <label className="label-icon">
                    <BsFillCalendarRangeFill className="icon" />
                  </label>
                  <input
                    type="date"
                    placeholder="FECHA DE IDA"
                    className="input-field"
                    min={minDate}
                    required
                  />
                </div>
                <hr style={{ margin: "25px" }} />

                <div className="form-group">
                  <label className="label-icon">
                    <GiAirplaneDeparture className="icon" />
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="ORIGEN"
                    value={origin}
                    onChange={handleOriginChange}
                    list="origin-suggestions"
                    className="input-field"
                  />
                </div>
                <div className="form-group">
                  <label className="label-icon">
                    <GiAirplaneArrival className="icon" />
                  </label>
                  <input
                    type="text"
                    placeholder="DESTINO"
                    className="input-field"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="label-icon">
                    <BsFillCalendarRangeFill className="icon" />
                  </label>
                  <input
                    type="date"
                    placeholder="FECHA DE REGRESO"
                    min={minDate}
                    className="input-field"
                    required
                  />
                </div>
              </div>
            )}

            {tripType !== "idayvuelta" && (
              <div className="form-group">
                <label className="label-icon">
                  <BsFillCalendarRangeFill className="icon" />
                </label>
                <input
                  type="date"
                  placeholder="FECHA DE IDA"
                  min={minDate}
                  className="input-field"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label className="label-icon">
                <BiUserCircle className="icon" />
              </label>
              <div className="passenger-input">
                <button
                  type="button"
                  className="decrement-btn"
                  disabled={count === 0}
                  onClick={handleDecrement}
                >
                  -
                </button>
                <input
                  type="text"
                  className="input-field-passenger"
                  style={{ width: "15px", textAlign: "center" }}
                  min="0"
                  readOnly
                  value={`${count}`}
                  required={count === 0}
                />
                <button
                  type="button"
                  className="increment-btn"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
              <select name="avion" id="avion" required>
                <option value="" disabled selected>
                  Seleccionar avión
                </option>
                <option value="avion1">AVION 1</option>
                <option value="avion2">AVION 2</option>
                <option value="avion3">AVION 3</option>
                <option value="avion4">AVION 4</option>
              </select>
            </div>

            <div className="form-group">
              {/* <button className="submit-button">
                Siguiente{" "} 
                <MdNavigateNext
                  className="icon"
                  style={{ borderRadius: "none", stroke:"#ffff", marginLeft:"5px", fontSize:" 30px"}}
                />{" "}
              </button> */}
              <button className="learn-more" id="btn">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Siguiente</span>
              </button>
            </div>
          </form>
        ) : (
          <div
            className="form"
            id="form2"
            onSubmit={handleSubmit}
            style={{ margin: "10px" }}
          >
            <form>
              <div className="form-group">
                <label className="label-icon">
                  <BiUserCircle className="icon" />
                </label>
                <input
                  type="text"
                  placeholder="NOMBRE"
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label className="label-icon">
                  <BiUserCircle className="icon" />
                </label>
                <input
                  type="text"
                  placeholder="APELLIDO"
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label className="label-icon">
                  <MdOutlinePhoneIphone className="icon" />
                </label>
                <input
                  type="text"
                  placeholder="TELEFONO"
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label className="label-icon">
                  <HiOutlineMail className="icon" />
                </label>
                <input
                  type="text"
                  placeholder="EMAIL"
                  className="input-field"
                />
              </div>

              <div className="form-group">
                <textarea
                  rows="8"
                  style={{ resize: "none", width: "80%" }}
                  className="input-field"
                  placeholder="MENSAJE"
                />
              </div>
              <div className="form-group">
                {/* <button
                  className="submit-button"
                  style={{ marginRight: "10px" }}
                  onClick={() => setSecondForm(false)}
                >
                  <BiArrowBack
                    style={{ marginRight: "10px" }}
                    className="icon"
                  />{" "}
                  Volver{" "}
                </button> */}
                <button
                  className="custom-button"
                  id="btn2"
                  onClick={() => setSecondForm(false)}
                >
                  <span className="circle" aria-hidden="true">
                      <BiArrowBack style={{fontSize: "24px", marginTop:"12px"}} className="iconback" />
                  </span>
                  <span className="button-text">Volver</span>
                </button>
                {/* <button className="submit-button">
                  {" "}
                  Reservar{" "}
                  <CgCheckO
                    className="icon"
                    style={{ marginLeft: "10px" }}
                  />{" "}
                </button> */}
                <button className="learn-more" id="btn">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Enviar</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormPasaje;
