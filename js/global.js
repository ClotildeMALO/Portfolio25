// Gestion clic menu burger mobile
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navBar ul');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});