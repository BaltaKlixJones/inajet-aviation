import React, { useState, useEffect, useRef } from "react";
import "./FormPasaje.css";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { BiUserCircle, BiArrowBack } from "react-icons/bi";
import { getAllAirCrafts } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import FormCliente from "./SegundoForm/FormCliente";
import OneWay from "./OneWay/OneWay";
import RoundTrip from "./RoundTrip/RoundTrip";
import Multileg from "./Multileg/Multileg";

const FormPasaje = () => {
  const [t, i18n] = useTranslation("global");
  const [count, setCount] = useState(0);
  
  const [origin2, setOrigin2] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [tripType, setTripType] = useState("Ida");
  const [minDate, setMinDate] = useState("");
  const [secondForm, setSecondForm] = useState(false);
  const [selectedAircraftId, setSelectedAircraftId] = useState("");
  const [form1Data, setForm1Data] = useState({});
  const { id } = useParams();
  const form = useRef();
  const [formDat1, setFormData1] = useState({});
  const [formDat2, setFormData2] = useState({});

  const dispatch = useDispatch();
  const allAircrafts = useSelector((state) => state.allAircrafts);

  useEffect(() => {
    dispatch(getAllAirCrafts());
  }, [dispatch]);

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setMinDate(currentDate);
    if (id) {
      setSelectedAircraftId(id);
    }
  }, [id]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const combinedData = { ...formDat1, ...formDat2 };

    emailjs
      .sendForm(
        "service_upt0v8j",
        "template_giym42l",
        form.current,
        "0M_Yk1zMYiYtPpfkz"
      )
      .then(
        (result) => {
          alert("Su consulta ha sido enviada con éxito");
        },
        (error) => {
          console.log(error);
          alert("Ha ocurrido un error, por favor intente nuevamente");
        }
      );

    setSecondForm(false);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    const {
      user_from,
      user_to,
      user_date_from,
      user_date_to,
      user_passengers,
      user_aircraft,
    } = e.target;

    const newData = {
      userFrom: user_from.value,
      userTo: user_to.value,
      user_date_from: user_date_from.value,
      user_date_to: user_date_to ? user_date_to.value : null,
      user_passengers: user_passengers.value,
      user_aircraft: user_aircraft.value,
    };

    setFormData1(newData);
    console.log(newData);
    setSecondForm(true);
  };

  const handleSelectChange = (event) => {
    setSelectedAircraftId(event.target.value);
  };

 
  const handleOriginChange2 = async (e) => {
    setOrigin2(e.target.value);
  };

  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };

  return (
    <div className="container-home">
      <div className="form">
        {!secondForm ? (
          <form ref={form} onSubmit={handleSubmit2}>
            <div className="form-group">
              <div className="radio-container">
                <input
                  type="radio"
                  id="ida"
                  className="radio-input"
                  value="Ida"
                  checked={tripType === "Ida"}
                  onChange={handleTripTypeChange}
                  required
                />
                <label htmlFor="ida" className="radio-label">
                  {t("formPasaje.ida")}
                </label>
              </div>
              &nbsp;
              <div className="radio-container">
                <input
                  type="radio"
                  id="idayvuelta"
                  className="radio-input"
                  value="idayvuelta"
                  checked={tripType === "idayvuelta"}
                  onChange={handleTripTypeChange}
                  required
                />
                <label htmlFor="idayvuelta" className="radio-label">
                  {t("formPasaje.idaVuelta")}
                </label>
              </div>
              &nbsp;
              <div className="radio-container">
                <input
                  type="radio"
                  id="multileg"
                  className="radio-input"
                  value="Multileg"
                  checked={tripType === "Multileg"}
                  onChange={handleTripTypeChange}
                  required
                />
                <label for="multileg" className="radio-label">
                  MULTILEG
                </label>
              </div>
            </div>
            {/* // Formulario de ida */}
            {tripType === "Ida" && (
           <OneWay minDate={minDate} />
            )}

           {/* Formulario de ida y vuelta */}
            {tripType === "idayvuelta" && (
              <RoundTrip handleOriginChange2={handleOriginChange2} minDate={minDate} origin={origin2}/>
            )}

             {tripType === "Multileg" && (
            <Multileg/>
            
            )}
               {/* Botones de pasajeros  */}
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
                  name="user_passengers"
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

              {/* Seleccion de avion  */}
              <select
                id="avion"
                name="user_aircraft"
                value={selectedAircraftId}
                onChange={handleSelectChange}
                required
              >
                <option value="" name="user_aircraft" disabled>
                  {t("formPasaje.SeleccionarAvion")}
                </option>
                {allAircrafts.map((aircraft) => (
                  <option key={aircraft.id} value={aircraft.id}>
                    {aircraft.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <button className="learn-more" id="btn">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">{t("formPasaje.siguiente")}</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="form" id="form2">
            <FormCliente form={form} handleSubmit={handleSubmit} setSecondForm={setSecondForm}/>
          </div>
        )}
        <div className="gradient-overlay"></div>
      </div>
    </div>
  );
};

export default FormPasaje;
