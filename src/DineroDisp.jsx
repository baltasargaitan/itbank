import React, { useState } from 'react';
import styles from './DineroDisp.module.css';
import Transferencias from './Transferencias';

const DineroDisp = () => {
    const [dinero, setDinero] = useState(1000);

    const handleActualizarDinero = (monto) => {
        if (dinero >= monto){
            setDinero(dinero - monto);
            alert(`Transferencia realizada con éxito de $${monto}`);
        }
        else {
            alert ('Fondos Insuficientes')
        }
    };

    return (
        <div className={styles.dineroContainer}>
            <h2>Dinero Disponible</h2>
            <p className={styles.dinero}>${dinero}</p>
            <Transferencias actualizarDinero={handleActualizarDinero} />
        </div>
    );
};

export default DineroDisp;






