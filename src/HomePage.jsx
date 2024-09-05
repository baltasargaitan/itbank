import React from "react";
import {link} from 'react-router-dom';

function HomePage(){
    return (
        <div className='HomePage'>
            <h1>Bienvenido a Timex</h1>
            <div className='opciones'>
                <Link to="/login">
                <button>Iniciar sesion</button>
                </Link>
                <h2>Si aun no tienes tu cuenta en TimeX...</h2>
                <Link to="/signup">
                <button>Crear cuenta</button>
                </Link>
            </div>
        </div>
    );
}export default HomePage;