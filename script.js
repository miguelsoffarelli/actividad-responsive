const carousel = document.getElementById('carouselExample');

let carouselInterval = setInterval(function () {
    const nextButton = carousel.querySelector('.carousel-control-next');
    nextButton.click();
}, 3000);
carousel.addEventListener('mouseover', function () {
    clearInterval(carouselInterval);
});
carousel.addEventListener('mouseout', function () {
    carouselInterval = setInterval(function () {
        const nextButton = carousel.querySelector('.carousel-control-next');
        nextButton.click();
    }, 3000);
});