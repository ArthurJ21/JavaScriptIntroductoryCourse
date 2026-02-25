// =======================================================
// PORTAFOLIO — Oscar Barbosa | Gameplay & AI Programmer
// Archivo: script.js
// Descripción: Lógica de interactividad del portafolio.
//
// ÍNDICE DE SECCIONES:
//  1. Año automático en el footer
//  2. Animaciones fade-in con IntersectionObserver
//  3. Scroll suave del navbar (event delegation)
//  4. Resaltado de sección activa en navbar (aria-current)
// =======================================================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------------------------------
    // 1. AÑO AUTOMÁTICO EN EL FOOTER
    // Lee el elemento #current-year del HTML y lo rellena
    // con el año actual. Así nunca hay que actualizar el
    // footer manualmente al cambiar de año.
    // -------------------------------------------------------
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }


    // -------------------------------------------------------
    // 2. ANIMACIONES FADE-IN AL HACER SCROLL
    // Usa IntersectionObserver (más eficiente que 'scroll' listener)
    // para añadir la clase .visible a cada elemento .fade-in
    // cuando entra al viewport.
    //
    // Para agregar animación a cualquier nuevo elemento HTML:
    // simplemente añádele la clase "fade-in" en el HTML.
    //
    // El setTimeout de 500ms es un fallback de seguridad para
    // cuando el archivo se abre con file:// (protocolo local),
    // donde el Observer puede no dispararse correctamente.
    // -------------------------------------------------------
    if ("IntersectionObserver" in window) {
        const observerOptions = {
            root: null,        // Viewport del navegador como raíz
            rootMargin: "0px",
            threshold: 0.1     // Se activa cuando el 10% del elemento es visible
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    obs.unobserve(entry.target); // Deja de observar: solo anima una vez
                }
            });
        }, observerOptions);

        document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

        // Fallback de seguridad: muestra los elementos restantes tras 500ms.
        // Cubre edge cases con protocolo file:// o navegadores estrictos.
        setTimeout(() => {
            document.querySelectorAll(".fade-in:not(.visible)").forEach(el => {
                el.classList.add("visible");
            });
        }, 500);

    } else {
        // Fallback total: navegadores sin soporte de IntersectionObserver.
        // Muestra todos los elementos directamente sin animación.
        document.querySelectorAll(".fade-in").forEach(el => el.classList.add("visible"));
    }


    // -------------------------------------------------------
    // 3. SCROLL SUAVE DEL NAVBAR
    // Usa 'event delegation': un solo listener en el <ul>
    // maneja el click de todos los links, en vez de uno
    // por cada <a>. Más eficiente y fácil de mantener.
    //
    // El try/catch protege de selectores inválidos que
    // podrían romper la ejecución del script.
    //
    // Para cambiar el offset del scroll (ej. si la navbar
    // cambia de tamaño), edita navbarHeight o usa
    // document.querySelector(".navbar").offsetHeight.
    // -------------------------------------------------------
    const navList = document.querySelector(".nav-links");
    if (navList) {
        navList.addEventListener("click", (e) => {
            // Solo reacciona a links con href="#seccion" (internos)
            const link = e.target.closest("a[href^='#']");
            if (!link) return;

            e.preventDefault();
            const targetId = link.getAttribute("href");

            try {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    // Descuenta la altura de la navbar fija para no tapar el título
                    const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 70;
                    window.scrollTo({
                        top: targetSection.offsetTop - navbarHeight,
                        behavior: "smooth"
                    });
                }
            } catch (error) {
                // Si el selector falla (ej. href="#algo-inválido"), avisa en consola
                // sin romper el resto del script.
                console.warn("Navegación: selector no válido ->", targetId);
            }
        });
    }


    // -------------------------------------------------------
    // 4. RESALTADO DE SECCIÓN ACTIVA EN EL NAVBAR
    // Actualiza aria-current="page" en el link del navbar
    // correspondiente a la sección visible en pantalla.
    // El CSS en style.css usa este atributo para colorear
    // el link activo en cyan.
    //
    // Usa IntersectionObserver (más eficiente que 'scroll' listener)
    // con threshold: 0.5 (la sección debe estar 50% visible).
    //
    // Para añadir una nueva sección y que el navbar la detecte:
    // basta con añadir un id al <section> y un <a href="#id"> en HTML.
    // -------------------------------------------------------
    const sections = document.querySelectorAll("section[id], header[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (sections.length && navLinks.length && "IntersectionObserver" in window) {
        const activeLinkObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    navLinks.forEach(link => {
                        link.removeAttribute("aria-current");
                        if (link.getAttribute("href") === `#${id}`) {
                            // aria-current="page" es estándar de accesibilidad ARIA
                            link.setAttribute("aria-current", "page");
                        }
                    });
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => activeLinkObserver.observe(section));
    }


    // Mensaje de confirmación en DevTools (solo para desarrollo)
    console.info("OB Portfolio: Todos los sistemas inicializados correctamente.");
});
