document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.scrolling-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
});

document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.querySelector('.splash-screen');
    const logo = document.querySelector('.logo');

    setTimeout(() => {
        setTimeout(() => {
            splashScreen.classList.add("display-none");
        },0); // Espera a que la transición de opacidad termine
    }, 1000); // Espera 3 segundos antes de ocultar la pantalla de inicio
});

// Animación de logo-fondo al hacer scroll
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight; // Puedes ajustar este valor
    const progress = Math.min(scrollY / maxScroll, 1);

    // Logo derecho
    const logoDer = document.querySelector('.logo-fondo:not(.izq)');
    if (logoDer) {
        logoDer.style.transform = `translateX(${progress * 60}vw) scale(${1 + progress * 0.5})`;
        logoDer.style.opacity = `${1 - progress * 0.5}`;
    }
    // Logo izquierdo
    const logoIzq = document.querySelector('.logo-fondo.izq');
    if (logoIzq) {
        logoIzq.style.transform = `translateX(-${progress * 60}vw) scale(${1 + progress * 0.5}) rotateY(180deg)`;
        logoIzq.style.opacity = `${1 - progress * 0.5}`;
    }
});