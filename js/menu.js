const checkbox = document.getElementById('burger-menu');
const menu = document.querySelector('.nav');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        menu.classList.add('show-menu');
    } else {
        menu.classList.remove('show-menu');
    }
});
//Comportamiento de los a en el menu
function obtenerNombreArchivoURL() {
    const rutaCompleta = window.location.pathname;
    const partesRuta = rutaCompleta.split('/'); // Divide la ruta en partes separadas por '/'
    const nombreArchivo = partesRuta[partesRuta.length - 1]; // Obtén la última parte que es el nombre del archivo
    let nombre = nombreArchivo.split('.');
    return nombre[0];
}

// Ejemplo de uso:
const nombreArchivo = obtenerNombreArchivoURL();
const link = document.getElementById(nombreArchivo);
link.classList.add('active');

