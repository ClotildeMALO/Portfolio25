document.addEventListener('DOMContentLoaded', () => {
    const sliderNavLinks = document.querySelectorAll('.slider-nav a');

    sliderNavLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            setTimeout(() => {
                sliderNavLinks.forEach(link => link.classList.remove('active'));
                event.target.classList.add('active');
            }, 100); 
        });
    });
});

let currentIndex = 0;
const slideImg = document.querySelectorAll('.slider img');
const slider = document.querySelector('.slider');

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + slideImg.length) % slideImg.length;
    const offset = slideImg[currentIndex].offsetLeft;
    slider.scrollTo({ left: offset, behavior: 'smooth' });

    document.querySelectorAll('.slider-nav a').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}