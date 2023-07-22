function cambiarEstilo() {
    // Obtén el elemento div por su ID
    let div = document.getElementsByClassName("card")[0];

    // Agrega o quita la clase "estilo-clic" al div dependiendo de si ya la tiene o no
    if (div.classList.contains("prueba")) {
        div.classList.remove("prueba");
    } else {
        div.classList.add("prueba");
    }
}

// Asigna la función al evento onclick del div
document.getElementsByClassName("card")[0].onclick = cambiarEstilo;

document.addEventListener("click", function (event) {
    var miDiv = document.getElementsByClassName("card")[0];
    var targetElement = event.target; // Elemento en el que se hizo clic

    // Verificar si el clic ocurrió fuera del div específico y si tiene la clase "estilo-clic"
    if (targetElement !== miDiv && !miDiv.contains(targetElement) && miDiv.classList.contains("prueba")) {
        miDiv.classList.remove("prueba"); // Remover la clase si es necesario
    }
});