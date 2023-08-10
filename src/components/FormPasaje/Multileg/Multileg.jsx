import React, {useState} from "react";
import { useTranslation } from "react-i18next";

const Multileg = () => {
  const [t, i18n] = useTranslation("global");
  const [multilegState, setMultilegState] = useState("");

  const handleMultilegChange = (e) => {
    setMultilegState(e.target.value);
    console.log(multilegState)
  };


  return (
    <div className="form-group">
    <textarea
      className="input-field"
      name="multileg"
      style={{ resize: "none", width: "80%", height: "200px" }}
      placeholder={t("formPasaje.multilegText")}
      
    />
  </div>
  );
};

export default Multileg;
