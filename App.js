
import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import GenTable from './prestamo';
import contenido from './contenido';
import Cuentas from './Cuentas';

function App() {
  const [seccion, setSeccion] = useState('home');

  const mostrarContenido = (seccion) => {
    setSeccion(seccion);
  };

  return (
    <div>
      <Header onShowTable={mostrarContenido} />
      <Cuentas />

      {/* Área principal */}
      <div id="main-content">
        <h2>Bienvenido a Time Bank</h2>
        {seccion === 'prestamo' ? <GenTable /> : contenido[seccion]}
      </div>

      <footer>
        <a href="Políticas de Uso y Privacidad de Time Bank.ini">Políticas de Uso y Privacidad de Time Bank</a>
      </footer>
    </div>
  );
}

export default App;
