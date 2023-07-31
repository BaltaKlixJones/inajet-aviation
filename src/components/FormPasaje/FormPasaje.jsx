import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FormPasaje.css";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import {GrFormNextLink} from "react-icons/gr";
import { BiUserCircle } from "react-icons/bi";

const FormPasaje = () => {
  const [count, setCount] = useState(0);
  const [origin, setOrigin] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [tripType, setTripType] = useState("Ida");
  const [minDate, setMinDate] = useState("");

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
        <form action="">
          <div className="form-group">
            <label>
              <input
                type="radio"
                value="Ida"
                checked={tripType === "Ida"}
                onChange={handleTripTypeChange}
              />
              <spam className="spam">Ida</spam>
            </label>
            &nbsp;
            <label>
              <input
                type="radio"
                value="idayvuelta"
                checked={tripType === "idayvuelta"}
                onChange={handleTripTypeChange}
              />
              <spam className="spam">Ida y Vuelta</spam>
            </label>{" "}
            &nbsp;
            <label>
              <input
                type="radio"
                value="Multileg"
                checked={tripType === "Multileg"}
                onChange={handleTripTypeChange}
              />
              <spam className="spam">Multileg</spam>
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
            />
            <datalist id="origin-suggestions">
              {suggestions.map((cityName, index) => (
                <option key={index} value={cityName} />
              ))}
            </datalist>
          </div>
          <div className="form-group">
            <label className="label-icon">
              <GiAirplaneArrival className="icon" />
            </label>
            <input type="text" placeholder="DESTINO" className="input-field" />
          </div>
          <div className="form-group">
            <label className="label-icon">
              <BsFillCalendarRangeFill className="icon" />
            </label>
            {tripType === "idayvuelta" && (
              <div>
                <input
                  type="date"
                  placeholder="FECHA DE IDA"
                  className="input-field"
                  min={minDate}
                  style={{ marginBottom: "15px" }}
                />{" "}
                <br />
                <input
                  type="date"
                  placeholder="FECHA DE REGRESO"
                  min={minDate}
                  className="input-field"
                />
              </div>
            )}
            {tripType !== "idayvuelta" && (
              <input
                type="date"
                placeholder="FECHA DE IDA"
                min={minDate}
                className="input-field"
              />
            )}
          </div>
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
                min="0"
                readOnly
                value={`${count} ${count === 1 ? "pasajero" : "pasajeros"}`}
              />
              <button
                type="button"
                className="increment-btn"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>

          <div className="form-group">
            <button className="submit-button">Siguiente <GrFormNextLink className="icon"/> </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPasaje;
