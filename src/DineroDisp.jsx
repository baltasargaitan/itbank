import React, {useState} from 'react';
import styles from './DineroDisp.module.css'
import Transferencias from './Transferencias';


const DineroDisp = ({ actualizarDinero }) => {
    const[dinero,setDinero] = useState(1000); 

    const handleActualizarDinero = (monto) => {
        setDinero(dinero - monto);
    }
    return(
        <div className={styles.dineroContainer}>
            <h2>Dinero Disponible: </h2>
            <p className={styles.dinero}>${dinero}</p>
        </div>
    );
};

export default DineroDisp;