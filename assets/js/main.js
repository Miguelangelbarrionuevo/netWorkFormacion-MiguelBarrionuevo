document.addEventListener("DOMContentLoaded", function () {
    // === SPINNER DE CARGA ===
    const spinnerOverlay = document.getElementById("spinner-overlay");
    const links = document.querySelectorAll("a"); // Captura todos los enlaces

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const target = link.getAttribute("target");

            // Solo muestra el spinner si el enlace abre en la misma ventana
            if (!target || target !== "_blank") {
                event.preventDefault(); // Detiene la navegación inicial
                spinnerOverlay.classList.add("active"); // Muestra el spinner

                // Espera un poco y redirige (para simular carga)
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300); // Ajusta el tiempo según necesites
            }
        });
    });

    // Oculta el spinner al terminar la carga de la página
    window.addEventListener("load", () => {
        spinnerOverlay.classList.remove("active");
    });

    // === MENÚ DESPLEGABLE (Dropdowns) ===
    document.querySelectorAll('.dropdown').forEach(function (dropdown) {
        dropdown.addEventListener("mouseenter", function () {
            this.querySelector(".dropdown-menu").classList.add("show");
        });

        dropdown.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-menu").classList.remove("show");
        });
    });

    // === SUBMENÚS (Hover en los submenús) ===
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
    
    const observers = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(" slide-in-left");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });
  
    observers.forEach((el) => observer.observe(el));
  });
