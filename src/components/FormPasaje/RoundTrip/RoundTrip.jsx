import React, { useState, useEffect } from "react";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { getSuggestions } from "../../../utils/suggestions";
import OneWay from "../OneWay/OneWay";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocations } from "../../../redux/actions";
// import locations from "../../../data/locations";

const RoundTrip = ({ minDate, origin, handleOriginChange }) => {
  const [t, i18n] = useTranslation("global");
  const [suggestions2, setSuggestions2] = useState([]);
  const [destinationSuggestions2, setDestinationSuggestions2] = useState([]);
  const [origin2, setOrigin2] = useState("");
  const allLocations = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(getAllLocations())
  },[dispatch])

  const handleOriginChange2 = (e) => {
    const inputValue = e.target.value;
    setOrigin2(inputValue);
    const filteredSuggestions = getSuggestions(inputValue, allLocations);
    setSuggestions2(filteredSuggestions);
  };

  const handleDestinationChange2 = (e) => {
    const inputValue = e.target.value;
    const filteredSuggestions = getSuggestions(inputValue, allLocations);
    setDestinationSuggestions2(filteredSuggestions);
  };

  return (
    <div>
      <OneWay
        handleOriginChange={handleOriginChange}
        origin={origin}
        minDate={minDate}
      />
      <hr style={{ margin: "25px" }} />

      <div className="form-group">
        <label className="label-icon">
          <GiAirplaneDeparture className="icon" />
        </label>
        <input
          required
          type="text"
          name="user_from_2"
          placeholder={t("formPasaje.origen")}
          value={origin2}
          onChange={handleOriginChange2}
          list="origin-suggestions4"
          className="input-field"
          autoComplete="off"
        />
        <datalist id="origin-suggestions4">
          {suggestions2.map((suggestion2, index) => (
            <option key={index} value={suggestion2} />
          ))}
        </datalist>
      </div>
      <div className="form-group">
        <label className="label-icon">
          <GiAirplaneArrival className="icon" />
        </label>
        <input
          type="text"
          placeholder={t("formPasaje.destino")}
          className="input-field"
          name="user_to_2"
          required
          list="destination-suggestions3"
          onChange={handleDestinationChange2}
          autoComplete="off"
        />
        <datalist id="destination-suggestions3">
          {destinationSuggestions2.map((suggestion2, index) => (
            <option key={index} value={suggestion2} />
          ))}
        </datalist>
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
          name="user_date_back"
          required
        />
      </div>
    </div>
  );
};

export default RoundTrip;
