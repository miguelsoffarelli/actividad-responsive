const carousel = document.getElementById('textCarousel');
const optionsBtn = document.querySelector(".optionsBtn");
const smallOptions = document.querySelector(".smallOptions");


// Event Listener para que al clickear el botón "Opciones" se muestre el menú de opciones para pantallas más chicas.
optionsBtn.addEventListener("click", (e) => {
    smallOptions.classList.toggle("showOptions");
});


// Función para asegurarse de que el carrusel haga slide automáticamente (ya que en algunas ocasiones no lo hace).
let carouselInterval = setInterval(function () {
    const nextButton = carousel.querySelector('.carousel-control-next');
    nextButton.click();
}, 2000);


// Función para que al posicionar el mouse sobre el carrusel, este se detenga.
carousel.addEventListener('mouseover', function () {
    clearInterval(carouselInterval);
});

// Función para que al mover el mouse fuera del carrusel, este retome el slide automático.
carousel.addEventListener('mouseout', function () {
    carouselInterval = setInterval(function () {
        const nextButton = carousel.querySelector('.carousel-control-next');
        nextButton.click();
    }, 2000);
});
