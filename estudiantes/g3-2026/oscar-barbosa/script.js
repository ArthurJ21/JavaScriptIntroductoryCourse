// =======================================================
// PORTFOLIO — Oscar Barbosa | Gameplay & AI Programmer
// File: script.js
// Description: Portfolio interactivity logic.
//
// SECTION INDEX:
//  1. Automatic year in the footer
//  2. Fade-in animations with IntersectionObserver
//  3. Smooth navbar scroll (event delegation)
//  4. Active section highlight in navbar (aria-current)
// =======================================================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------------------------------
    // 1. AUTOMATIC YEAR IN THE FOOTER
    // Reads the #current-year element from HTML and fills it
    // with the current year, so the footer never needs to be
    // updated manually when the year changes.
    // -------------------------------------------------------
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }


    // -------------------------------------------------------
    // 2. FADE-IN SCROLL ANIMATIONS
    // Uses IntersectionObserver (more efficient than a 'scroll'
    // listener) to add the .visible class to each .fade-in
    // element when it enters the viewport.
    //
    // To add animation to any new HTML element, simply add
    // the "fade-in" class to it in the HTML.
    //
    // The 500ms setTimeout is a safety fallback for when the
    // file is opened via file:// (local protocol), where the
    // Observer may not fire correctly.
    // -------------------------------------------------------
    if ("IntersectionObserver" in window) {
        const observerOptions = {
            root: null,        // Browser viewport as root
            rootMargin: "0px",
            threshold: 0.1     // Triggers when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    obs.unobserve(entry.target); // Stop observing: animate only once
                }
            });
        }, observerOptions);

        document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

        // Safety fallback: shows remaining elements after 500ms.
        // Covers edge cases with file:// protocol or strict browsers.
        setTimeout(() => {
            document.querySelectorAll(".fade-in:not(.visible)").forEach(el => {
                el.classList.add("visible");
            });
        }, 500);

    } else {
        // Full fallback: browsers without IntersectionObserver support.
        // Shows all elements directly without animation.
        document.querySelectorAll(".fade-in").forEach(el => el.classList.add("visible"));
    }


    // -------------------------------------------------------
    // 3. SMOOTH NAVBAR SCROLL
    // Uses 'event delegation': a single listener on the <ul>
    // handles clicks for all links, instead of one per <a>.
    // More efficient and easier to maintain.
    //
    // The try/catch guards against invalid selectors that
    // could break script execution.
    //
    // To change the scroll offset (e.g. if the navbar changes
    // size), edit navbarHeight or use
    // document.querySelector(".navbar").offsetHeight.
    // -------------------------------------------------------
    const navList = document.querySelector(".nav-links");
    if (navList) {
        navList.addEventListener("click", (e) => {
            // Only reacts to links with href="#section" (internal)
            const link = e.target.closest("a[href^='#']");
            if (!link) return;

            e.preventDefault();
            const targetId = link.getAttribute("href");

            try {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    // Subtract fixed navbar height to avoid covering the section title
                    const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 70;
                    window.scrollTo({
                        top: targetSection.offsetTop - navbarHeight,
                        behavior: "smooth"
                    });
                }
            } catch (error) {
                // If the selector fails (e.g. href="#invalid"), warn in console
                // without breaking the rest of the script.
                console.warn("Navigation: invalid selector ->", targetId);
            }
        });
    }


    // -------------------------------------------------------
    // 4. ACTIVE SECTION HIGHLIGHT IN NAVBAR
    // Updates aria-current="page" on the navbar link that
    // corresponds to the section visible on screen.
    // The CSS in style.css uses this attribute to color
    // the active link in cyan.
    //
    // Uses IntersectionObserver (more efficient than 'scroll'
    // listener) with threshold: 0.5 (section must be 50% visible).
    //
    // To add a new section and have the navbar detect it:
    // just add an id to the <section> and an <a href="#id"> in HTML.
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
                            // aria-current="page" is the standard ARIA accessibility attribute
                            link.setAttribute("aria-current", "page");
                        }
                    });
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => activeLinkObserver.observe(section));
    }


    // Confirmation message in DevTools (development only)
    console.info("OB Portfolio: All systems initialized successfully.");
});
