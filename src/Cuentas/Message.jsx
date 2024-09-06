// Message.js
import React from 'react';
import styles from './DineroDisp.module.css';

const Message = ({ text, onClose }) => {
    if (!text) return null;
    return (
        <div className={styles.message}>
            <p>{text}</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default Message;
