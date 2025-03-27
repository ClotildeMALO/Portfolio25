const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

document.querySelectorAll('.slider img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});

document.querySelector('.lightbox .close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

document.querySelector('.lightbox').addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});