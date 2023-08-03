import React from "react";
import "./Quienes.css";
const Quienes = () => {
    return (
      <div className="container-quienes">
        <div className="section">
          <h1 className="section-title">¿Quiénes somos?</h1>
          <h3 className="section-text">
            Somos Brokers con amplia trayectoria en el sector aeronáutico
            dedicados a la venta de vuelos privados de corto, mediano y largo
            alcance. Ofreciéndole al cliente la mejor solución para su
            requerimiento. También realizamos asesoramiento aeronáutico y soporte
            de aeronaves en tierra.
          </h3>
        </div>
        <div className="section">
          <h1 className="section-title">¿Qué es un Broker Aeronáutico?</h1>
          <h3 className="section-text">
            Un Broker es un experto en aviación que cuenta con los conocimientos,
            los recursos y los contactos necesarios para ofrecer las soluciones
            que mejor se ajusten a las necesidades operativas y presupuestarias de
            cada cliente.
          </h3>
        </div>
        <div className="section">
          <h1 className="section-title">¿Porqué contratar inajet?</h1>
          <h3 className="section-text">
            Usando los servicios de un Broker el cliente ahorra tiempo, ya que con
            un solo contacto accede a cientos de compañías aéreas, y se asegura de
            estar contratando el producto adecuado a su necesidad. A diferencia de
            las compañías aéreas, el bróker no tiene aviones, por lo que no está
            obligado a ofrecer los de su propia flota (que podrían no ser los más
            adecuados para la misión).
          </h3>
        </div>
      </div>
    );
  };
  
  export default Quienes;