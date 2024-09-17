
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio.css';
import Banner from './Banner.jsx';




const LandPage = () => {
    const navigate = useNavigate();
    const nombreUsuario = localStorage.getItem('usuario')?.split(': ')[1];

    const handleLogout = () => {
        localStorage.removeItem('usuario');
        localStorage.removeItem('contrasenia');
        navigate('/login');
    };

    return (
        <><><div className="landpage-container">
            <h1>¡Hola, {nombreUsuario}!</h1>
            <p>Bienvenido a Time Bank</p>

        </div></>
        
        <div>
             <Banner/>
            </div></>

    );
    
};

export default LandPage;
