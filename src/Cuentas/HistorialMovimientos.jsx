import React from 'react';
import styles from './HistorialMovimientos.module.css'; // Asegúrate de tener este archivo CSS

const HistorialMovimientos = ({ movimientos }) => {
    return (
        <div className={styles.historialContainer}>
            <h2>Últimos Movimientos</h2>
            <ul className={styles.listaMovimientos}>
                {movimientos.length === 0 ? (
                    <li>No hay movimientos recientes.</li>
                ) : (
                    movimientos.map((movimiento, index) => (
                        <li key={index} className={styles.movimientoItem}>
                            Transferiste ${movimiento.monto} a {movimiento.usuario}. 
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};
export default HistorialMovimientos;
