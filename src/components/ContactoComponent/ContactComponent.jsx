import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next";

const Formulario = () => {
  const [t, i18n] = useTranslation("global");
  const form = useRef();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        icon: "info",
        title: "Enviando consulta...",
        text: "Espere un momento por favor...",
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
        title: "Su consulta ha sido enviada con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
      });
    }
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
            <label className="label">Email:</label>
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
         <h2 className="select-service-text">{t("text.consulting")}</h2> 
          <select className="select-contact">
            <option value="0" disabled>Seleccione un motivo</option>
            <option value="1">Servicio 1</option>
            <option value="2">Servicio 2</option>
            <option value="3">Servicio 3</option>

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
