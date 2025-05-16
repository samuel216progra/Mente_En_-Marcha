
// Sliders
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
let interval = null;
const intervalTime = 6000; // Cambia cada 6 segundos

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}
function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, intervalTime);
}

next.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});
prev.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

interval = setInterval(nextSlide, intervalTime);