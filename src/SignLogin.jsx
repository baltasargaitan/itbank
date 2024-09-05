import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';function Signup(){
    const [nombreUsuario, setNombreUsuario] = useState ('');
    const [contrasenia, setContrasenia] = useState ('');
    const [acepto, setAcepto]= useState (false);
    const navigate = useNavigate;
    const [cuentaCreada, setCuentaCreada] = useState (false);const manejoNombreUsuario = (event) => {setNombreUsuario(event.target.value);};
const manejoContrasenia = (event) => {setContrasenia(event.target.value);};
const handleSubmit = (event) => {event.preventDefault();
    if (!nombreDeUsuario || !contrasenia || !acepto) {
        alert ('Por favor, complete todos los campos y acepte los términos y condiciones.');
        return;
    }localStorage.setItem ("usuario", 'Nombre de usuario: ${nombreUsuario}');
localStorage.setItem("contrasenia", 'Constrasenia: ${contrasenia}');
localStorage.setItem("aceptoT", acepto ? 'Acepta Terminos y Condiciones':'No acepta Terminos y Condiciones');setCuentaCreada(true);
    };
const manejoVolverHome = () => {navigate('/');};return(
        <div className="crearCuenta">
            {cuentaCreada ? (
                <div className= "mensaje-exito">
                    <h1>Cuenta creada exitosamente!!</h1>
                    <button onCLick={manejoVolverHome}>Volver a la pagina de inicio</button>
                </div>
            ) : (
            <><h1>Crea tu cuenta en TimeBank </h1><form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombreUsuario">Cree un nombre de usuario: </label>
                        <input
                            type="text" id="nombreUsuario" name="nombreUsuario"
                            value={nombreUsuario} onChange={manejoNombreUsuario} requiered />
                    </div>
                    <div>
                        <label htmlFor="contrasenia">Cree una contraseña: </label>
                        <input type="password" id="contrasenia" name="contrasenia"
                            value={contrasenia} onChange={manejoContrasenia} requiered />
                    </div>
                    <div>
                        <label htmlFor="acepto">
                            <input type="checkbox" id="acepto" name="acepto"
                                checked={acepto}
onChange={manejoAcepto} requiered /> Acepto los terminos y
condiciones </label>
                        <a href="enlace.com" //aca linkeamos la direccion del pdf con los terminos y condiciones
                            target="_blank" rel="noopener noreferrer" title="TerminosYCondiciones">
                            Terminos y condiciones de uso TimeBank
                        </a>
                    </div>
                    <button type="submit">Crear cuenta</button>
                </form></>
            )}
        </div>
    );
}export default Signup;



