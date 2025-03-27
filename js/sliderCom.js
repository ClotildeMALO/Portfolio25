document.querySelectorAll('.slider-container').forEach(container => {
    const slider = container.querySelector('.slider');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: 300, behavior: 'smooth' });
    });
});