document.getElementById("transferencia").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    let mensaje = document.getElementById("realizada");
    mensaje.style.display = "block";
    
    // Oculta el mensaje después de 5 segundos
    setTimeout(function() {
        mensaje.style.display = "none";
    }, 5000); // 5000 milisegundos = 5 segundos
});

document.addEventListener("click", function(event) {
    let mensaje = document.getElementById("realizada");
    let formulario = document.getElementById("transferencia");

    // Oculta el mensaje si se hace clic fuera del formulario o del mensaje
    if (!formulario.contains(event.target) && !mensaje.contains(event.target)) {
        mensaje.style.display = "none";
    }
});
