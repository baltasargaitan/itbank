// src/components/Message.js

import React, { useEffect } from 'react';
import styles from './Message.module.css';

const Message = ({ text, onClose }) => {
  useEffect(() => {
    if (text) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [text, onClose]);

  if (!text) return null;

  return (
    <div className={styles.messageContainer}>
      <p>{text}</p>
    </div>
  );
};

export default Message;
