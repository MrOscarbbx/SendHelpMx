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