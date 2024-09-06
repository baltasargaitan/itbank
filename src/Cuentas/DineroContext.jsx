// DineroContext.js
import React, { createContext, useState, useContext } from 'react';

// Crea el contexto
const DineroContext = createContext();

// Crea un proveedor de contexto
export const DineroProvider = ({ children }) => {
    const [dinero, setDinero] = useState(10400);
    const [movimientos, setMovimientos] = useState([]);
    const [message, setMessage] = useState('');

    const handleActualizarDinero = (monto, usuario) => {
        if (monto > 0 && dinero >= monto) {
            setDinero(dinero - monto);
            setMovimientos(prevMovimientos => [{ usuario, monto }, ...prevMovimientos].slice(0, 5));
            setMessage(`Transferencia realizada con éxito a ${usuario} de $${monto}`);
        } else {
            setMessage('Fondos insuficientes o monto inválido');
        }
    };

    const handleCloseMessage = () => {
        setMessage('');
    };

    return (
        <DineroContext.Provider value={{ dinero, movimientos, message, handleActualizarDinero, handleCloseMessage }}>
            {children}
        </DineroContext.Provider>
    );
};

// Custom hook para usar el contexto
export const useDinero = () => useContext(DineroContext);
