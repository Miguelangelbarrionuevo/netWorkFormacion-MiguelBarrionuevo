document.addEventListener("DOMContentLoaded", function () {
    // === SPINNER DE CARGA ===
    const spinnerOverlay = document.getElementById("spinner-overlay");
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const target = link.getAttribute("target");
            if (!target || target !== "_blank") {
                event.preventDefault();
                spinnerOverlay.classList.add("active");
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            }
        });
    });

    window.addEventListener("load", () => {
        spinnerOverlay.classList.remove("active");
    });

    // === MENÚ DESPLEGABLE ===
    document.querySelectorAll('.dropdown').forEach(function (dropdown) {
        dropdown.addEventListener("mouseenter", function () {
            this.querySelector(".dropdown-menu").classList.add("show");
        });
        dropdown.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-menu").classList.remove("show");
        });
    });

    // === SUBMENÚS ===
    document.querySelectorAll('.dropdown-submenu').forEach(function (submenu) {
        submenu.addEventListener("mouseenter", function () {
            let dropdown = this.querySelector(".dropdown-menu");
            if (dropdown) {
                dropdown.style.display = "block";
            }
        });
        submenu.addEventListener("mouseleave", function () {
            let dropdown = this.querySelector(".dropdown-menu");
            if (dropdown) {
                dropdown.style.display = "none";
            }
        });
    });

    // === ANIMACIONES AL HACER SCROLL ===
    const observers = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in-left");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
    });
    observers.forEach((el) => observer.observe(el));

 // === SWIPER ===
if (document.querySelector('.mySwiper')) {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
}


    // === FILTRAR CARRUSEL ===
    window.filtrarCarrusel = function (tipo) {
        const titulo = document.getElementById("titulo-carrusel");
        const items = document.querySelectorAll('#empresasCarousel .carousel-item');
        const botones = document.querySelectorAll(".selector-box");

        // Cambiar el título según el tipo
        if (tipo === 'publica') {
            titulo.textContent = "ENTIDADES PÚBLICAS";
        } else if (tipo === 'privada') {
            titulo.textContent = "ENTIDADES PRIVADAS";
        }

        // Limpiar selección de botones
        botones.forEach(boton => boton.classList.remove("active"));

        // Activar el botón correspondiente
        const botonActivo = document.querySelector(`.selector-box[onclick*="${tipo}"]`);
        if (botonActivo) botonActivo.classList.add("active");

        // Ocultar todos los ítems y eliminar clase active
        items.forEach((item) => {
            item.classList.remove('active');
            item.classList.add('d-none');
        });

        // Mostrar solo los del tipo seleccionado
        const visibles = document.querySelectorAll(`#empresasCarousel .carousel-item.${tipo}`);
        visibles.forEach((item) => {
            item.classList.remove('d-none');
        });

        // Activar el primero visible
        if (visibles.length > 0) {
            visibles[0].classList.add('active');
        }
    };

    // Esperar 100ms para asegurarse de que Bootstrap haya cargado el carrusel
    setTimeout(() => {
        filtrarCarrusel('publica');
    }, 100);
});
