/* Carousel de imagens */

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function updateCarousel() {
        container.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        if (index < slides.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    }

    function prevSlide() {
        if (index > 0) {
            index--;
        } else {
            index = slides.length - 1;
        }
        updateCarousel();
    }

    setInterval(nextSlide, 3000); 

});

/* Carrinho de compras */

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart() {
        // Aqui você pode adicionar a lógica para adicionar o produto ao carrinho
        alert('Produto adicionado ao carrinho!');
    }
});