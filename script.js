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
        alert('Produto adicionado ao carrinho!');
    }
});

/* Menu*/

const openButton = document.getElementById("openbtn");
const closeButton = document.querySelector('.closebtn');
const sidebar = document.getElementById("sidebar");

function openNav() {
    sidebar.style.width = "250px";
    openButton.style.display = "none";
}

function closeNav() {
    sidebar.style.width = "0";
    openButton.style.display = "block";
}

openButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);
