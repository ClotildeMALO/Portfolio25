
document.addEventListener('DOMContentLoaded', () =>{
    var card = document.querySelector('.card');
    card.addEventListener( 'click', function() {
        card.classList.toggle('flip');
    });
});