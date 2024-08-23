// Define la variable con el valor dinámico
var saldo = "29102004";

// Función para mostrar el contenido dinámico
function mostrarContenido(seccion) {
    var contenido = {
        'home': `
            <h3>Inicio</h3>
            <p>Bienvenido a Time Bank. Aquí puedes gestionar todas tus cuentas y servicios financieros.</p>
            <p>Saldo disponible: ${saldo}$</p>
        `
    };

    // Obtener el elemento del DOM
    var mainContent = document.getElementById('main-content');

    // Verificar si el elemento existe y la sección es válida
    if (mainContent && contenido[seccion]) {
        // Actualizar el contenido del área principal
        mainContent.innerHTML = contenido[seccion];
    } else {
        console.error("Elemento no encontrado o sección no válida");
    }
}

// Función para recargar la página (opcional)
function recargar() {
    location.reload();
}
