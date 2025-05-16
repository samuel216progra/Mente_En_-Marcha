// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const slideshow = document.getElementById('slideshow');
    const images = ['../img/imagen1.jpg', '../img/imagen2.jpg', '../img/imagen3.jpg', '../img/imagen4.jpg', '../img/imagen5.jpg'];

    let currentIndex = 0;


    // Precargar imágenes
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });

    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });

    function changeImage() {
        slideshow.classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(() => {
            slideshow.src = images[currentIndex];
            slideshow.classList.add('active');
        }, 100);  // Reducir el tiempo de espera para mayor fluidez
    }

    setInterval(changeImage, 3000);
});

// script.js

/*
// Mostrar el menú al pasar el mouse
sidebar.addEventListener('mouseenter', () => {
    sidebar.classList.add('show');
});
*/

// Ocultar el menú cuando el mouse salga
sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.remove('show');
});