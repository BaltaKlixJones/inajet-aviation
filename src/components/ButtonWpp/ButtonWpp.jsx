import React from "react";
import "./ButtonWpp.css";
import { BsWhatsapp } from "react-icons/bs";

const ButtonWpp = () => {
  return (
    <div className="button-wpp-style">
      <a href="https://wa.me/message/3IHDE2CZ6YZBE1" target="_blank">
        <BsWhatsapp style={{ color: "#25D366" }} size={45} />
      </a>
    </div>
  );
};

export default ButtonWpp;
