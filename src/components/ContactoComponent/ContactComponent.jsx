import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const Formulario = () => {
  const [t, i18n] = useTranslation("global");
  const form = useRef();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const { slug: slugParam, opcion } = useParams();
  // toma :slug o :opcion y normaliza
  const slug = (slugParam ?? opcion ?? "").toLowerCase().trim();
  // select controlado
  const [selectedOption, setSelectedOption] = useState("0");

  useEffect(() => {
    const alias = {
      "private-flights": "private-flights",
      "aviations-parts": "aviation-parts",
      "ground-support": "ground-support",
      "aviation-consulting": "aviation-consulting",
      other: "other",
    };

    const normalized = alias[slug];

    const mapToLabel = {
      "private-flights": t("services.vuelosEjecutivos"),
      "aviation-parts": t("services.vuelosSanitarios"),
      "ground-support": t("services.soporteTierra"),
      "aviation-consulting": t("services.asesoramiento"),
      other: t("services.other"),
    };

    if (normalized && mapToLabel[normalized]) {
      setSelectedOption(mapToLabel[normalized]);
    } else {
      setSelectedOption("0");
    }
  }, [slug, i18n.language, t]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        icon: "info",
        title: "Sending inquiry...",
        text: "Please wait a moment...",
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
      await emailjs.sendForm(
        `${import.meta.env.VITE_SERVICE_EMAIL}`,
        `${import.meta.env.VITE_TEMPLATE2_ID}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      );
      Swal.fire({
        icon: "success",
        title: "Your query has been sent successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");
    setMensaje("");
  };

  return (
    <div className="formulario-container">
      <form ref={form} className="formulario" onSubmit={handleSubmit}>
        {/* <h1>Contacto</h1> */}
        <div className="campo-doble">
          <div className="campo">
            <label className="label">{t("data.name")}:</label>
            <input
              name="name_contact"
              type="text"
              className="input-contact"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <label className="label">{t("data.last-name")}:</label>
            <input
              name="lastname_contact"
              type="text"
              className="input-contact"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="campo-doble">
          <div className="campo">
            <label className="label">EMAIL:</label>
            <input
              type="email"
              name="email_contact"
              className="input-contact"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <label className="label">{t("data.phone")}:</label>
            <input
              type="tel"
              name="phone_contact"
              className="input-contact"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="select-contact-container">
          <h2 className="select-service-text">{t("text.consulting")} :</h2>
          <select
            className="select-contact"
            name="select_contact"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            required
          >
            <option value="0" disabled>
              SELECT AN OPTION
            </option>
            <option value={t("services.vuelosEjecutivos")}>
              {t("services.vuelosEjecutivos")}
            </option>
            <option value={t("services.vuelosSanitarios")}>
              AVIATION PARTS
            </option>
            <option value={t("services.soporteTierra")}>
              {t("services.soporteTierra")}
            </option>
            <option value={t("services.asesoramiento")}>
              {t("services.asesoramiento")}
            </option>
            <option value={t("services.other")}>{t("services.other")}</option>
          </select>
        </div>
        <div className="campo2">
          <label className="label">{t("data.message")}:</label>
          <textarea
            name="message_contact"
            value={mensaje}
            className="message_contact"
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>
        <div className="div-contact-bnt">
          <button type="submit" className="btn-contact">
            {t("formPasaje.enviar")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
