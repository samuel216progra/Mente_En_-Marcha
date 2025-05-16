let inhalando = true;
let contador = 4;

function iniciarActividad() {
    const circulo = document.getElementById('circulo');
    setInterval(() => {
        if (contador === 0) {
            inhalando = !inhalando;
            contador = inhalando ? 4 : 6;
            circulo.style.backgroundColor = inhalando ? '#68d391' : '#e53e3e';
            circulo.innerText = inhalando ? 'Inhala' : 'Exhala';
        }
        circulo.innerText = `${circulo.innerText.split(' ')[0]} ${contador--}`;
    }, 1000);
}