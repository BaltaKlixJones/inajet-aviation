import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Multileg = () => {
  const [t, i18n] = useTranslation("global");
  const [multilegState, setMultilegState] = useState("");

  const handleMultilegChange = (e) => {
    setMultilegState(e.target.value);
  };

  return (
    <div className="form-group" >
      <textarea
        rows="8"
        style={{ resize: "none", width: "80%" }}
        className="input-field"
        placeholder={t("formPasaje.multilegText")}
        onChange={handleMultilegChange}
        value={multilegState}
        name="multileg"
        required
      />
    </div>
  );
};

export default Multileg;
