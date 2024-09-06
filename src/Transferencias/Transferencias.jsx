// Transferencias.js
import React, { useState } from 'react';
import { useDinero } from '../Cuentas/DineroContext';
import styles from './Transferencias.module.css';

const Transferencias = () => {
    const [usuario, setUsuario] = useState('');
    const [monto, setMonto] = useState('');
    const { handleActualizarDinero } = useDinero();

    const handleSubmit = (e) => {
        e.preventDefault();
        const montoNumero = Number(monto);
        if (isNaN(montoNumero) || montoNumero <= 0) {
            alert('Por favor, ingresa un monto válido.');
            return;
        }
        handleActualizarDinero(montoNumero, usuario);
        setUsuario('');
        setMonto('');
    };

    return (
        <div className={styles.Transferenciascontainer}> 
            <form onSubmit={handleSubmit}>
            <h1>Nueva transferencia: </h1>
            <div className={styles.inputGroup}> 
            <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Destinatario"
                required
            />
            </div>
            <input
                type="number"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                placeholder="Monto"
                min="1"
                required
            />
            <button type="submit">Transferir</button>
        </form>
        </div>
    );
};

export default Transferencias;

/*const Transferencias = ({ actualizarDinero }) => {
    const [usuario, setUsuario] = useState('');
    const [monto, setMonto] = useState('');

    const handleTransferencia = () => {
        if (monto > 0) {
            actualizarDinero(parseFloat (monto));
            setUsuario('');
            setMonto('');
        } else {
            alert('El monto debe ser mayor a 0');
        }
    };

    return (
        <div className={styles.TransferenciasContainer}>
            <h2>Transferencias</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleTransferencia(); }}>
                <div className={styles.inputgroup}>
                    <label>Usuario:</label>
                    <input className={styles.input} type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div className={styles.inputgroup}>
                    <label>Monto:</label>
                    <input className={styles.input} type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
                </div>
                <button className={styles.button} type="submit">Realizar Transferencia</button>
            </form>
        </div>
    );
};

export default Transferencias;*/
