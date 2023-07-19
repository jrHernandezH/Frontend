const checkbox = document.getElementById('burger-menu');
const menu = document.querySelector('.menu');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        menu.classList.add('show-menu');
    } else {
        menu.classList.remove('show-menu');
    }
});
