// Función para mostrar contenido en el área principal
function mostrarContenido(seccion) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main-content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", seccion + ".html", true);
    xhttp.send();
}

// Función para recargar la página
function recargar() {
    location.reload();
}
