const checkbox = document.getElementById('burger-menu');
const menu = document.querySelector('.nav');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        menu.classList.add('show-menu');
    } else {
        menu.classList.remove('show-menu');
    }
});
//Mostrar estilos una vez que se clickea un a dependiendo la ruta de url que contenga por ejemplo home.html = el id Home
function obtenerNombreArchivoURL() {
    const rutaCompleta = window.location.pathname;
    const partesRuta = rutaCompleta.split('/'); // Divide la ruta en partes separadas por '/'
    const nombreArchivo = partesRuta[partesRuta.length - 1]; // Obtén la última parte que es el nombre del archivo
    let nombre = nombreArchivo.split('.');
    return nombre[0];
}

const nombreArchivo = obtenerNombreArchivoURL();
const link = document.getElementById(nombreArchivo);
link.classList.add('active');


//comportamiento del scroll al menu
window.addEventListener("scroll", function () {
    const menu = document.querySelector(".header");
    const scrollY = window.scrollY;

    if (scrollY > 100) { // Cambia el número 100 según sea necesario para ajustar el desplazamiento.
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
});
