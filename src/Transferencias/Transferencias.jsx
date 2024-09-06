
// src/components/Transferencias.js

import React, { useState } from 'react';
import styles from './Transferencias.module.css';

const Transferencias = ({ actualizarDinero }) => {
    const [usuario, setUsuario] = useState('');
    const [monto, setMonto] = useState('');

    const handleTransferencia = () => {
        if (usuario && monto > 0 ) {
            actualizarDinero(parseFloat(monto),usuario);
            setUsuario('');
            setMonto('');
        } else {
            // Manejar el mensaje de error a través del contexto
            actualizarDinero(0, 'El monto debe ser mayor a 0'); // Aquí `actualizarDinero` debe aceptar un segundo parámetro para el mensaje
        }
    };

    return (
        <div className={styles.TransferenciasContainer}>
            <h2>Transferencias</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleTransferencia(); }}>
                <div className={styles.inputgroup}>
                    <input required
                        className={styles.input}
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder='Destinatario'
                    />
                </div>
                <div className={styles.inputgroup}>
                    <input required
                        className={styles.input}
                        type="number"
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                        placeholder='Monto'
                    />
                </div>
                <button className={styles.button} type="submit">Realizar Transferencia</button>
                
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
