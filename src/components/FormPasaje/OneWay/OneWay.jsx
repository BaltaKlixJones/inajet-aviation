import React, { useState } from "react";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { getSuggestions } from "../../../utils/suggestions";

const OneWay = ({ minDate }) => {
  const [t, i18n] = useTranslation("global");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const locations = [
    "Salta, Argentina",
    "Jujuy, Argentina",
    "Chaco, Argentina",
    "Buenos Aires, Argentina",
    "Cordoba, Argentina",
    "Tucumán, Argentina",
    "Mendoza, Argentina",
  ];

  const handleOriginChange = (e) => {
    const inputValue = e.target.value;
    setOrigin(inputValue);
    const filteredSuggestions = getSuggestions(inputValue, locations); // Usa la función reutilizable
    setSuggestions(filteredSuggestions);
  };

  const handleDestinationChange = (e) => {
    const inputValue = e.target.value;
    setDestination(inputValue);
    const filteredSuggestions = getSuggestions(inputValue, locations); // Usa la función reutilizable
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
