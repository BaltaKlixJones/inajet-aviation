import React, { useState, useEffect } from "react";
import "./FormPasaje.css";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { BiUserCircle, BiArrowBack } from "react-icons/bi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { getAllAirCrafts } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FormPasaje = () => {
  const [t, i18n] = useTranslation("global");
  const [count, setCount] = useState(0);
  const [origin, setOrigin] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [tripType, setTripType] = useState("Ida");
  const [minDate, setMinDate] = useState("");
  const [secondForm, setSecondForm] = useState(false);
  const [selectedAircraftId, setSelectedAircraftId] = useState("");
  const { id } = useParams();

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
    setSecondForm(true);
  };

  const handleSelectChange = (event) => {
    setSelectedAircraftId(event.target.value);
  };

  const handleOriginChange = async (e) => {
    setOrigin(e.target.value);
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
              <div className="radio-container" >
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
            <div className="form-group">
              <label className="label-icon">
                <GiAirplaneDeparture className="icon" />
              </label>
              <input
                type="text"
                placeholder={t("formPasaje.origen")}
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
                placeholder={t("formPasaje.destino")}
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
                    placeholder="DEPARTURE DATE"
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
                    placeholder={t("formPasaje.origen")}
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
                    placeholder={t("formPasaje.destino")}
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
              <select
                name="avion"
                id="avion"
                value={selectedAircraftId}
                onChange={handleSelectChange}
                required
              >
                <option value="" disabled>
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
                  placeholder={t("data.name")}
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label className="label-icon">
                  <BiUserCircle className="icon" />
                </label>
                <input
                  type="text"
                  placeholder={t("data.last-name")}
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label className="label-icon">
                  <MdOutlinePhoneIphone className="icon" />
                </label>
                <input
                  type="text"
                  placeholder={t("data.phone")}
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
                  placeholder={t("data.message")}
                />
              </div>
              <div className="form-group">
                <button
                  className="custom-button"
                  id="btn2"
                  onClick={() => setSecondForm(false)}
                >
                  <span className="circle" aria-hidden="true">
                    <BiArrowBack
                      style={{ fontSize: "24px", marginTop: "12px" }}
                      className="iconback"
                    />
                  </span>
                  <span className="button-text">{t("formPasaje.volver")}</span>
                </button>

                <button className="learn-more" id="btn">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">{t("formPasaje.enviar")}</span>
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="gradient-overlay"></div>
      </div>
    </div>
  );
};

export default FormPasaje;
