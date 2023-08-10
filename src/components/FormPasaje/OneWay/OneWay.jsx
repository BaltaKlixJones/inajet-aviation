import React, { useState } from "react";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const OneWay = ({ minDate }) => {
  const [t, i18n] = useTranslation("global");
  const [origin, setOrigin] = useState("");

  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
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
          name="user_to"
          required
        />
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
