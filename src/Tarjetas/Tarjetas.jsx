// Tarjetas.js
import React from 'react';
import styles from './Tarjetas.module.css'; // Asegúrate de que este sea el nombre correcto del archivo CSS

const Card = ({ tier, name, number }) => {
    return (
        <div className={`${styles.card} ${styles[tier]}`}>
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{name}</h2>
                <p className={styles.cardNumber}>{number}</p>
                <p className={styles.cardTier}>{tier.toUpperCase()}</p>
            </div>
        </div>
    );
};

const Tarjetas = () => {
    return (
        <div className={styles.App}>
            <Card tier="classic" name="Leo Messi" number="1234 5678 9012 3456" />
            <Card tier="silver" name="Chiqui Tapia" number="1234 5678 6292 7140" />
            <Card tier="gold" name="Diego Maradona" number="5678 9012 3456 1234" />
            <Card tier="platinum" name="Max Verstappen" number="8765 4321 0987 6543" />
            <Card tier="black" name="Cristiano Ronaldo" number="1122 3344 5566 7788" />
        </div>
    );
};

export default Tarjetas;