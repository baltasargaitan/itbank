import React from 'react';
import './cuentas.css';

const Cuenta = ({ title, amount, currency }) => {
  return (
    <div className="cuenta">
      <h2>{title}</h2>
      <p className="saldo">{amount.toFixed(2)} {currency}</p>
    </div>
  );
};

const Cuentas = () => {
  // Datos de ejemplo; puedes obtener estos valores de un contexto, API, o estado
  const saldoPesos = 15000; // Ejemplo en pesos
  const saldoDolares = 2000; // Ejemplo en dólares

  return (
    <div className="cuentas-container">
      <Cuenta title="Cuenta en Pesos" amount={saldoPesos} currency="ARS" />
      <Cuenta title="Cuenta en Dólares" amount={saldoDolares} currency="USD" />
    </div>
  );
};

export default Cuentas;
