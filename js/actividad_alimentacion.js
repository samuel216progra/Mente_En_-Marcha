// No se necesita JS si solo se gira con hover
// Si quieres girar al hacer clic, puedes usar esto:

document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
        tarjeta.classList.toggle('flipped');
    });
});

.tarjeta.flipped .cara-frontal {
    transform: rotateY(180deg);
}

.tarjeta.flipped .cara-trasera {
    transform: rotateY(360deg);
}
