import React, { useState } from 'react';


const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    // a través de una API, por ejemplo.
  };

  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={handleSubmit}>
      {/* <h1>Contacto</h1> */}
        <div className="campo-doble">
          <div className="campo">
            <label>Nombre</label>
            <input
              type="text"
              className="input-contact"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <label>Apellido</label>
            <input
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
            <label>Email</label>
            <input
              type="email"
              className="input-contact"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <label>Teléfono</label>
            <input
              type="tel"
              className="input-contact"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="campo2">
          <label>Mensaje</label>
          <textarea
            value={mensaje}
            className='message-contact'
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>
        <div className='div-contact-bnt'>

        <button type="submit" className='btn-contact'>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
