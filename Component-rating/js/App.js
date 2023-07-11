let resultado = 0;

const handleRadioChange = () => {
    let prueba = document.getElementsByName('option');
    for (let i = 0; i < prueba.length; i++) {
        if (prueba[i].checked) {
            resultado = prueba[i].value;
        }
    }
}

const response = () => {
    if (resultado != 0) {
        let score = document.getElementById('score');
        let saveScore = document.getElementById('scoreSave');

        score.style.display = 'none'
        saveScore.style.display = 'flex'
        document.getElementById('view-score').textContent = `You selected ${resultado} out of 5`;
    } else {
        alert('selecciona un numero')
    }
}