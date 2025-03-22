document.addEventListener('DOMContentLoaded', () => {
    const sliderNavLinks = document.querySelectorAll('.slider-nav a');

    sliderNavLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            sliderNavLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
});