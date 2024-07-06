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
     //openButton.style.display = "block";
}

window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    const openbtn = document.getElementById("openbtn");
    if (document.documentElement.scrollTop > 50) {
        navbar.style.top = "-60px"; 
        openbtn.style.display = "block";
    } else {
        navbar.style.top = "0";
        openbtn.style.display = "none"; 
        closeNav();
    }
};
//   openButton.addEventListener('click', openNav);
//   closeButton.addEventListener('click', closeNav);


/*Modal */

document.addEventListener("DOMContentLoaded", () => {
    const modalButtons = document.querySelectorAll(".openModalBtn");
    const closeButtons = document.querySelectorAll(".close");

    // Função para abrir o modal
    modalButtons.forEach(button => {
        button.onclick = function() {
            const modalId = this.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        }
    });

    // Função para fechar o modal
    closeButtons.forEach(button => {
        button.onclick = function() {
            const modalId = this.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.style.display = "none";
        }
    });

    // Fechar o modal clicando fora dele
    window.onclick = function(event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    }

    // Função para abrir imagem em modal
    const thumbnails = document.querySelectorAll(".img-thumbnail");
    thumbnails.forEach(thumbnail => {
        thumbnail.onclick = function() {
            const imgModal = document.getElementById("imgModal");
            const modalImg = document.getElementById("imgModalContent");
            imgModal.style.display = "block";
            modalImg.src = this.src;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item h4");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            const parent = item.parentNode;
            parent.classList.toggle("active");
        });
    });
});