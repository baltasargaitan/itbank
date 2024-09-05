import './convert.css';
import React, { useEffect, useState } from 'react';
import CurrencyConverter from './CurrencyConverter';
function Convert() {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('ARS');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("https://openexchangerates.org/api/latest.json?app_id=e2d3052c53fa4e0ca159bfc191e53c42");
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();
        setRates(data.rates);
        setError(null); // Limpia el error si la solicitud fue exitosa
      } catch (error) {
        setError('No se pudo obtener la tasa de cambio.');
        console.error("Error al obtener datos:", error);
      }
    };
    fetchRates();
  }, []);
  const handleConvert = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const conversionRate = rates[toCurrency] / rates[fromCurrency];
      setConvertedAmount(amount * conversionRate);
    }
  };
  return (
    <div className="App">
      <h1>Convertidor de Monedas</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <CurrencyConverter
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          amount={amount}
          rates={rates}
          onFromCurrencyChange={setFromCurrency}
          onToCurrencyChange={setToCurrency}
          onAmountChange={value => setAmount(Number(value))}
          onConvert={handleConvert}
          convertedAmount={convertedAmount}
        />
      )}
    </div>
  );
}
export default Convert;