
import './App.css';
import Encabezado from './encabezado';
import React from 'react';

import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoanCalculator from './prestamo';
function App() {
  return (
    <div className="App">
      <Encabezado title="Time Bank" />

      <div>
      <LoanCalculator/>

      </div>
    </div>
  );
};

export default App;
