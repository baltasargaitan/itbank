import React, {useState} from 'react';
import './LoanCalculator.css';
/*Loan viene del ingles prestamo para que la funcion no tenga un nombre kilometrico*/
const LoanCalculator = () => {
    const[loanAmount, setLoanAmount] = useState(0);
    const[installments, setInstallments] = useState(0);
    const[totalPayment, setTotalPayment] = useState(0);
    const calculateLoan = () => {
        const interestRate = 0.05; /*Este es el importe de intereses*/
        const totalInterest = loanAmount * interestRate * installments;
        const total = parseFloat(loanAmount) + totalInterest;
        setTotalPayment(total);
    };
    /*Div de "la maquina"*/
    return(
        <div className="loan-calculator">
            <h1>Calculadora de Prestamos</h1>
            <label>
                Monto del prestamo:
                    <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)}/>
            </label>
            <br/>
            <label>
                Cantidad de Cuotas:
                <input type="number" value={installments} onChange={(e) => setInstallments (e.target.value)} />
            </label>
            <br/>
            <button onClick={calculateLoan}>Calcular</button>
            <h2>Total a Pagar: $ {totalPayment.toFixed(2)}</h2>
        </div>
    );
};
export default LoanCalculator;