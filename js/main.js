// Scroll suave en navegación
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.warn(`Elemento no encontrado para: ${this.getAttribute('href')}`);
        }
    });
});

// Animaciones al hacer scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Cargar el footer dinámicamente
document.addEventListener("DOMContentLoaded", function () {
    fetch("include/menu.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el menu: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const menuContainer = document.getElementById("menu-container");
            if (menuContainer) {
                menuContainer.innerHTML = data;

                // Reaplicar animaciones tras cargar contenido dinámico
                const dynamicFaders = menuContainer.querySelectorAll('.fade-in');
                dynamicFaders.forEach(fader => appearOnScroll.observe(fader));
            } else {
                console.error("El contenedor del menu no existe en el DOM.");
            }
        })
        .catch(error => console.error("Error al cargar el menu:", error));
    fetch("include/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el footer: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const footerContainer = document.getElementById("footer-container");
            if (footerContainer) {
                footerContainer.innerHTML = data;

                // Reaplicar animaciones tras cargar contenido dinámico
                const dynamicFaders = footerContainer.querySelectorAll('.fade-in');
                dynamicFaders.forEach(fader => appearOnScroll.observe(fader));
            } else {
                console.error("El contenedor del footer no existe en el DOM.");
            }
        })
        .catch(error => console.error("Error al cargar el footer:", error));

    // Manejo del banner de cookies
    const cookieBanner = document.getElementById("cookie-banner");
    if (!localStorage.getItem("cookiesAccepted") && cookieBanner) {
        // Mostrar el banner
        cookieBanner.style.display = "block";

        // Aceptar cookies
        const acceptButton = document.getElementById("accept-cookies");
        if (acceptButton) {
            acceptButton.onclick = function () {
                localStorage.setItem("cookiesAccepted", "true");
                cookieBanner.style.display = "none";
            };
        } else {
            console.warn("El botón de aceptar cookies no se encontró.");
        }
    }
});
