import React, { useState, useEffect } from "react";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { getSuggestions } from "../../../utils/suggestions";
import { getAllLocations } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const OneWay = ({ minDate }) => {
  const [t, i18n] = useTranslation("global");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const allLocations = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getAllLocations())
  }, [dispatch])


  const handleOriginChange = (e) => {
    const inputValue = e.target.value;
    setOrigin(inputValue);
    const filteredSuggestions = getSuggestions(inputValue, allLocations);
    setSuggestions(filteredSuggestions);
};

  const handleDestinationChange = (e) => {
    const inputValue = e.target.value;
    setDestination(inputValue);
    const filteredSuggestions = getSuggestions(inputValue, allLocations); 
    setDestinationSuggestions(filteredSuggestions);
  };

  return (
    <>
      <div className="form-group">
        <label className="label-icon">
          <GiAirplaneDeparture className="icon" />
        </label>
        <input
          type="text"
          name="user_from"
          placeholder={t("formPasaje.origen")}
          value={origin}
          onChange={handleOriginChange}
          className="input-field"
          required
          list="origin-suggestions"
          autoComplete="off"
        />
        <datalist id="origin-suggestions">
          {suggestions.map((suggestion, index) => (
            <option key={index} value={suggestion} />
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
          name="user_to"
          value={destination}
          onChange={handleDestinationChange}
          required
          list="destination-suggestions"
          autoComplete="off"
        />
        <datalist id="destination-suggestions">
          {destinationSuggestions.map((suggestion, index) => (
            <option key={index} value={suggestion} />
          ))}
        </datalist>
      </div>
      <div className="form-group">
        <label className="label-icon">
          <BsFillCalendarRangeFill className="icon" />
        </label>
        <input
          type="date"
          placeholder="FECHA DE IDA"
          name="user_date_from"
          min={minDate}
          className="input-field"
          required
        />
      </div>
    </>
  );
};

export default OneWay;
