import React from 'react';
import './Footer.css';

// Importa los íconos de las redes sociales
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';  // Icono de X (Twitter)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        {/* Íconos de redes sociales */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />  {/* Icono de X (anteriormente Twitter) */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;

