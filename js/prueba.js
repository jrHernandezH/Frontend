var textos = ["Desarrollo web", "Full Stack"];
var index = 0;
var elemento = document.getElementById("texto-animado");

function cambiarTexto() {
    elemento.textContent = textos[index];
    index = (index + 1) % textos.length;
}

// Intervalo para cambiar el texto cada 5 segundos
setInterval(cambiarTexto, 5000);