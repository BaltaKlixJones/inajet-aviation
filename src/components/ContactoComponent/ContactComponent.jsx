import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Formulario = () => {
  const form = useRef();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async  (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    // a través de una API, por ejemplo.
    try {
      Swal.fire({
        title: "Enviando consulta...",
        text: "Espere un momento por favor...",
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
      await  emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_EMAIL}`,
        `${import.meta.env.VITE_TEMPLATE2_ID}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      Swal.fire({
        icon: "success",
        title: "Su consulta ha sido enviada con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal!",
      });
    }
    
  };

  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={handleSubmit}>
        {/* <h1>Contacto</h1> */}
        <div className="campo-doble">
          <div className="campo">
            <label className="label">Nombre</label>
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
            <label className="label">Apellido</label>
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
            <label className="label">Email</label>
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
            <label className="label">Teléfono</label>
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
        <div className="campo2">
          <label className="label">Mensaje</label>
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
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
