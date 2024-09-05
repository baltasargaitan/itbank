import React, { useState } from 'react';
import './Prestamo.css';

const Prestamo = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [installments, setInstallments] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateLoan = () => {
    const interestRate = 0.05; // Tasa de interés
    const totalInterest = loanAmount * interestRate * installments;
    const total = parseFloat(loanAmount) + totalInterest;
    setTotalPayment(total);
  };

  return (
    <div className="loan-calculator">
      <h1>Calculadora de Préstamos</h1>
      <label>
        Monto del préstamo:
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Cantidad de Cuotas:
        <input
          type="number"
          value={installments}
          onChange={(e) => setInstallments(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateLoan}>Calcular</button>
      <h2>Total a Pagar: $ {totalPayment.toFixed(2)}</h2>
    </div>
  );
};

export default Prestamo;
