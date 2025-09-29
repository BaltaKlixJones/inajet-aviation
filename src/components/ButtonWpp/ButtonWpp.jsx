import React from "react";
import "./ButtonWpp.css";
import { BsWhatsapp } from "react-icons/bs";

const ButtonWpp = () => {
  return (
    <div className="button-wpp-style">
      <a href="https://wa.me/13054292964" target="_blank">
        <BsWhatsapp style={{ color: "#25D366" }} size={45} />
      </a>
    </div>
  );
};

export default ButtonWpp;
