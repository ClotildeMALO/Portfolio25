// Gestion clic menu burger mobile
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navBar ul');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Particule arriere plan
    fetch('js/particles.json')
        .then(response => response.json())
        .then(config => {
            particlesJS('particles-js', config);
        })
        .catch(error => console.error('Erreur lors du chargement de particles.json:', error));
});