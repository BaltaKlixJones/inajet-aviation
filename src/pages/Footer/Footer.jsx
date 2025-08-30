import React from "react";
import "./Footer.css";
import { BiMailSend } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { BsBroadcastPin, BsClock, BsInstagram } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <footer className="footer">
        <hr className="hr-footer" />
        <div className="footer-content">
          <div className="div-logo">
            <h1 className="logo_h1">ınaȷet </h1>
            <div className="copy-rights">
              <p className="copy-text">
                &#169; {t("footer.derechos")} <br /> <br />{" "}
                <Link to="/terms&conditions">{t("footer.terms")}</Link>{" "}
              </p>
            </div>
          </div>
          <div className="contact-info" style={{ marginBottom: "30px" }}>
            <h2 className="contact-heading">{t("footer.contacto")}</h2>
            <div className="contact-details">
              <BiMailSend className="icon3" style={{ marginLeft: "-4px" }} />
              <a
                href="mailto:inajetaviation@gmail.com"
                className="contact-email"
                style={{ marginLeft: "5px" }}
              >
                inajetaviation@gmail.com
              </a>
            </div>
            <div className="contact-details">
              {/* <BsBroadcastPin
                className="icon3"
                style={{ marginLeft: "-4px", flexShrink: 0 }}
              />
              <a
                href="https://www.google.com/maps/place/Aeroparque+Internacional+Jorge+Newbery/@-34.559617,-58.4146389,15z/data=!4m2!3m1!1s0x0:0xfdd992892f9ccadb?sa=X&ved=2ahUKEwiRkO-Ai5mCAxWBqJUCHSHMBLMQ_BJ6BAhREAA&ved=2ahUKEwiRkO-Ai5mCAxWBqJUCHSHMBLMQ_BJ6BAhjEAg"
                target="blank"
                className="contact-email"
                style={{ marginLeft: "5px" }}
              >
                Aeroparque Jorge Newbery, Ciudad Autónoma de Buenos Aires,
                Argentina
              </a> */}
            </div>

            <div className="contact-details">
              <AiOutlinePhone
                className="icon3"
                style={{ marginLeft: "-4px" }}
              />

              <a
                href="https://wa.me/message/3IHDE2CZ6YZBE1"
                target="_blank"
                className="contact-email"
                style={{ marginLeft: "5px" }}
              >
                +54 9 11 5666-3957
              </a>
            </div>
          </div>
          <div className="opening-hours">
            <h2 className="hours-heading">{t("footer.horario")}</h2>
            <div className="hours-details">
              <BsClock className="icon3" />
              <p className="hours-text">24hs x 365</p>
            </div>
            <div>
              <h2 className="hours-heading">Instagram</h2>
              <div className="instagram">
                <BsInstagram className="icon3" />
                <a
                  href="https://www.instagram.com/inajetaviation/"
                  target="_blank"
                  className="contact-instagram"
                >
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
