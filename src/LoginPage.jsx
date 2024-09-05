import {useState} from 'react';
import {useNavigate} from 'react-router-dom';function Login() {
    const [nombreUsuario, setNombreUsuario]= useState ('');
    const [contrasenia, setConstrasenia]= useState ('');
    const [mensajeError, setMensajeError]= useState ('');
    const navigate = useNavigate;
    const manejoNombreUsuarioCambio = (event) => {setNombreUsuario(event.target.value);};
    const manejoContraseniaCambio = (event) => {setConstrasenia(event.target.value);};
    const handleSubmit = (event) => {event.preventDefault();
        const NombreUsuarioGuardado = localStorage.getItem('usuario')?.split(': ')[1];
        const ContraseniaGuardado = localStorage.getItem('contrasenia')?.split(': ')[1];
        if (!NombreUsuarioGuardado || !ContraseniaGuardado) {
            setMensajeError ('Cuenta no encontrada, proba creando tu cuenta');
            return;
        }
        if (nombreUsuario === NombreUsuarioGuardado && contrasenia === ContraseniaGuardado) {navigate ('pagprincipal.com')} //aca linkeamos la pag principal del banco
        else {setMensajeError ('Nombre de usuario o contraseña incorrectos');}
    };
    return (
        <div className='inicioSesion'>
            <h1>Iniciar sesion</h1>
            <form onSubmit={handleSubmit}>
                {mensajeError && <p style={{color: 'red'}}>{mensajeError} </p>}
            <div>
                <label htmlfor="nombreUsuario">Nombre de usuario:</label>
                    <input type="text" id="nombreUsuario" name="nombreUsuario"
                    value={nombreUsuario} onChange={manejoNombreUsuarioCambio}
                    required />
            </div>
            <div>
                <label htmlfor="contrasenia">Ingrese su contraseña: </label>
                    <input type="text" id="contrasenia" name="contrasenia"
                    value={contrasenia} onChange={manejoContraseniaCambio}
                    required />
            </div>
            <button type="submit">Iniciar sesion</button>
            </form>
        </div>
    );
}export default Login;