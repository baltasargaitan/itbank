
import React, { useState } from 'react';
import styles from './DineroDisp.module.css';
import Transferencias from '../Transferencias/Transferencias';
import Message from './Message';
import HistorialMovimientos from './HistorialMovimientos'; // Importa el nuevo componente

const DineroDisp = ({ onBalanceChange }) => {
    const [dinero, setDinero] = useState(10400);
    const [message, setMessage] = useState('');
    const [movimientos, setMovimientos] = useState([]); // Estado para almacenar los movimientos

    const handleActualizarDinero = (monto, usuario) => {
        if (monto > 0 && dinero >= monto) {
            setDinero(dinero - monto);
            setMovimientos([{ usuario, monto }, ...movimientos].slice(0, 5)); // Mantener solo los últimos 5 movimientos
            setMessage(`Transferencia realizada con éxito a ${usuario} de $${monto}`);
        } else {
            setMessage('Fondos insuficientes o monto inválido');
        }
    };

    const handleCloseMessage = () => {
        setMessage('');
    };

    // Pasar el saldo actual al componente padre si onBalanceChange está definido
    React.useEffect(() => {
        if (onBalanceChange) {
            onBalanceChange(dinero);
        }
    }, [dinero, onBalanceChange]);

    return (
        <div className={styles.dineroContainer}>
            <div className={styles.dineroDisp}>
                <h2>Dinero Disponible:</h2>
                <p>${dinero}</p>
            </div>
            <Transferencias actualizarDinero={handleActualizarDinero} />
            <Message text={message} onClose={handleCloseMessage} />
            <HistorialMovimientos movimientos={movimientos} /> {/* Muestra el historial de movimientos */}
        </div>
    );
};

export default DineroDisp;
