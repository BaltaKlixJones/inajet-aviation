import React, {useState} from "react";
import "./Footer.css";
import { BiMailSend } from "react-icons/bi";
import { BsBroadcastPin, BsClock, BsInstagram } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <hr style={{ width: "85%" }} />
      <footer className="footer">
        <div className="footer-content">
          <div className="div-logo">
            <h1 className="logo_h1">ınaȷet </h1>
            <div className="copy-rights">
              <p className="copy-text">&#169; {t("footer.derechos")}</p>
            </div>
          </div>
          <div className="contact-info">
            <h2 className="contact-heading">{t("footer.contacto")}:</h2>
            <div className="contact-details">
              <BiMailSend className="icon3" />
              <a
                href="mailto:inajetaviation@gmail.com"
                className="contact-email"
              >
                inajetaviation@gmail.com
              </a>
            </div>
            <div className="contact-details">
              <BsBroadcastPin className="icon4" />
              <p className="contact-address">
                Aeroparque Jorge Newbery, Ciudad Autónoma de Buenos Aires,
                Argentina
              </p>
            </div>
          </div>
          <div className="opening-hours">
            <h2 className="hours-heading">{t("footer.horario")}:</h2>
            <div className="hours-details">
              <BsClock className="icon3" />
              <p className="hours-text">24hs x 365</p>
            </div>
            <div >
              <h2 className="hours-heading">Instagram</h2>
              <div className="instagram">

                <BsInstagram className="icon3" />
                <a href="https://www.instagram.com/inajetaviation/" target="_blank" className="contact-instagram">
                <p className="contact-instagram">inajetaviation</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
