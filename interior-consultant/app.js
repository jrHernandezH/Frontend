let menu = document.getElementById("menu");
let burguerButton = document.getElementById("burguer");
var openIcon = document.getElementById("open");
var closeIcon = document.getElementById("close");
// Agregamos un Event Listener para el evento 'click' al botón de burguer-menu
burguerButton.addEventListener("click", function () {
    // Aquí vamos a alternar la clase 'hidden' para mostrar u ocultar el menú
    menu.classList.toggle("hidden");

    openIcon.style.display = menu.classList.contains("hidden") ? "none" : "block";
    closeIcon.style.display = menu.classList.contains("hidden") ? "block" : "none";
});