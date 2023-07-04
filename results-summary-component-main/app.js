const lista = document.querySelectorAll('.lista');
const Puntaje = 100;

const categoria = document.createElement('p');
const puntuacion = document.createElement('p');

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < lista.length; i++) {
            const categoria = document.createElement('p');
            const puntuacion = document.createElement('p');

            categoria.innerHTML = `<img src="${data[i].icon}" alt="reaction-svg"/> ${data[i].category}`;
            puntuacion.innerHTML = `${data[i].score}<span>/${Puntaje}</span>`;

            lista[i].appendChild(categoria);
            lista[i].appendChild(puntuacion);
        }
    })
    .catch(error => {
        console.error('Error al leer el archivo JSON:', error);
    });