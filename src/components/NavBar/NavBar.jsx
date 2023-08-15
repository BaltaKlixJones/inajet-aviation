import React, { useState, useEffect } from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [t, i18n] = useTranslation("global");

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Agregar el evento de desplazamiento
    return () => {
      window.removeEventListener("scroll", handleScroll); // Eliminar el evento al desmontar el componente
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  function toggleNav() {
    setOpen(!open);
  }

  const closeNav = () => {
    setOpen(false);
  };

  const handleLogoutAndCloseNav = async () => {
    closeNav();
  };

  return (
    <div className={`${style.header__nav} ${scrolled ? style.scrolled : ""}`}>
      <button className={style.header__buttonNavOpen} onClick={toggleNav}>
        <svg viewBox="0 0 24 24" width="34" height="34" fill="white">
          <path fill="" d="M3,6h18v2H3V6z M3,11h18v2H3V11z M3,16h18v2H3V16z" />
        </svg>
      </button>
      <nav className={`${style.nav} ${open ? style.navShow : ""}`}>
        <div className={style.nav__button}>
          <button className={style.header__buttonNavClose} onClick={toggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#f7f7f7"
              width="24px"
              height="24px"
            >
              <path d="M19,6.41L17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </div>
        <div className={style.img_logo}>
          <h1 className={style.logo_h1}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                transition: "color 0.3s",
              }}
              onClick={closeNav}
              // onMouseOver={(e) => e.target.style.color = "black"}
              // onMouseOut={(e) => e.target.style.color = "white"}
            >
              ınaȷet
            </Link>
          </h1>
        </div>
        <ul className={style.nav__ul}>
          <li className={style.nav__item}>
            <Link to="/flota" className={style.nav__link} onClick={closeNav}>
              {t("navbar.flot")}
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link to="/services" className={style.nav__link} onClick={closeNav}>
              {t("navbar.services")}
            </Link>
          </li>
          <li className={style.nav__item}>
            <Link to="/contacto" className={style.nav__link} onClick={closeNav}>
              {t("navbar.contact")}
            </Link>
          </li>
          <hr
            className={style.hr}
            style={{
              margin: "0px 10px -20px 30px",
              height: "40px",
              fontWeight: "bold",
            }}
          />
          <li className={style.nav__item_btn}>
            <button
              className={style.btn_traduce}
              style={{ marginRight: "-50px" }}
              onClick={() => i18n.changeLanguage("es")}
            >
              ES
            </button>
          </li>
          <li className={style.nav__item_btn}>
            <button
              className={style.btn_traduce}
              style={{ marginRight: "-80px" }}
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
