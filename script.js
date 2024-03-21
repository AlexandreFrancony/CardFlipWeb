var cards = document.querySelectorAll('.card');
console.log(cards);

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('flip');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('flip');
    });
});
