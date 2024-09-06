import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import Login from './Login./LoginPage';
import Signup from './SignLogin';
import pagprincipal from './pagprincipal'; //esta es la pagina a la que va a redirigirnos despues de iniciar sesion, es decir la pag principal del bancofunction App() {
    
function Rutas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/pagprincipal" element={<pagprincipal />}/>
            </Routes>
        </Router>
    );
    
}

export default Rutas;