import React from "react";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import OneWay from "../OneWay/OneWay";
const RoundTrip = ({ handleOriginChange, handleOriginChange2, minDate , origin2, origin}) => {
  const [t, i18n] = useTranslation("global");
  

    return (
    <div>
     <OneWay handleOriginChange={handleOriginChange} origin={origin} minDate={minDate}/>
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
          name="user_to_2"
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
          name="user_date_back"
          required
        />
      </div>
    </div>
  );
};

export default RoundTrip;
