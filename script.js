var jsFlips = document.querySelectorAll('.js-hover-flip');

if (window.innerWidth >= 768) {
    jsFlips.forEach(jsFlip => {
        jsFlip.addEventListener('mouseenter', () => {
            jsFlip.querySelector('.card').classList.add('flip');
        });
        jsFlip.addEventListener('mouseleave', () => {
            jsFlip.querySelector('.card').classList.remove('flip');
        });
    });
}