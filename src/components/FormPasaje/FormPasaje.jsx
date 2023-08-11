import React, { useState, useEffect, useRef } from "react";
import "./FormPasaje.css";
import { BiUserCircle } from "react-icons/bi";
import { getAllAirCrafts } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import FormCliente from "./SegundoForm/FormCliente";
import OneWay from "./OneWay/OneWay";
import RoundTrip from "./RoundTrip/RoundTrip";
import Multileg from "./Multileg/Multileg";
import { useLocation } from "react-router-dom";

const FormPasaje = () => {
  const [t, i18n] = useTranslation("global");
  const [count, setCount] = useState(0);
  const [multilegState, setMultilegState] = useState();
  const [origin2, setOrigin2] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [tripType, setTripType] = useState("Ida");
  const [minDate, setMinDate] = useState("");
  const [secondForm, setSecondForm] = useState(false);
  const [selectedAircraftId, setSelectedAircraftId] = useState("");
  const { id } = useParams();
  const form = useRef();
  const [formDat1, setFormData1] = useState({});
  const dispatch = useDispatch();
  const allAircrafts = useSelector((state) => state.allAircrafts);
  const [allAircraftsState, setAllAircraftsState] = useState("");

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

  const handleSubmit2 = (e) => {
    e.preventDefault();

    const {
      user_from,
      user_to,
      user_date_from,
      user_date_back,
      user_passengers,
      user_aircraft,
      user_from_2,
      user_to_2,
      multileg,
    } = e.target;

    const newData = {
      user_from: user_from ? user_from.value : null,
      user_to: user_to ? user_to.value : null,
      user_date_from: user_date_from ? user_date_from.value : null,
      user_date_back: user_date_back ? user_date_back.value : null,
      user_from_2: user_from_2 ? user_from_2.value : null,
      user_to_2: user_to_2 ? user_to_2.value : null,
      user_passengers: user_passengers ? user_passengers.value : null,
      user_aircraft: user_aircraft ? user_aircraft.value : null,
      multileg: multileg ? multileg.value : null,
    };

    setFormData1(newData);
    setSecondForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { from_name, from_lastname, email_id, user_phone, message } =
      e.target;

    const newData2 = {
      from_name: from_name ? from_name.value : null,
      from_lastname: from_lastname ? from_lastname.value : null,
      message: message ? message.value : null,
      email_id: email_id.value ? email_id.value : null,
      user_phone: user_phone.value ? user_phone.value : null,
    };

    const combinedData = {
      ...formDat1,
      ...newData2,
    };

    setFormData1(combinedData);
    

    try {
      Swal.fire({
        title: "Enviando consulta...",
        text: "Espere un momento por favor...",
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
      await emailjs.send(
        `${import.meta.env.VITE_SERVICE_EMAIL}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        combinedData,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      );

      Swal.fire({
        icon: "success",
        title: "Su consulta ha sido enviada con éxito",
        showConfirmButton: false,
        timer: 2000,
      });

      setSecondForm(false);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
      });
    }
  };
  
  const selectedAircraft = allAircrafts.find(
    (aircraft) => aircraft.id === selectedAircraftId
  );

  const selectedAircraftName = selectedAircraft ? selectedAircraft.name : "";

  const handleSelectChange = (event) => {
    setSelectedAircraftId(event.target.value);
  };

  const handleOriginChange2 = (e) => {
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
                  id="Multileg"
                  className="radio-input"
                  value="Multileg"
                  checked={tripType === "Multileg"}
                  onChange={handleTripTypeChange}
                  required
                />
                <label htmlFor="Multileg" className="radio-label">
                  MULTILEG
                </label>
              </div>
            </div>
            {/* // Formulario de ida */}
            {tripType === "Ida" && <OneWay minDate={minDate} />}

            {/* Formulario de ida y vuelta */}
            {tripType === "idayvuelta" && (
              <RoundTrip
                handleOriginChange2={handleOriginChange2}
                minDate={minDate}
                origin={origin2}
              />
            )}

            {tripType === "Multileg" && <Multileg />}
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
                value={id ? selectedAircraftName : selectedAircraftId}
                onChange={handleSelectChange}
                required
                // disabled={id ? true : false}
              >
                <option value="" disabled>
                  {t("formPasaje.SeleccionarAvion")}
                </option>
                {allAircrafts.map((aircraft) => (
                  <option key={aircraft.id} value={aircraft.name}>
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
            <form ref={form} onSubmit={handleSubmit}>
              <FormCliente setSecondForm={setSecondForm} />
            </form>
          </div>
        )}
        <div className="gradient-overlay"></div>
      </div>
    </div>
  );
};

export default FormPasaje;
