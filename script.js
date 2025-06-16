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