document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!name || !email || !message) {
                alert("Kérjük, töltse ki az összes mezőt!");
            } else {
                alert("Üzenet elküldve!");
                form.submit();
            }
        });
    }

    const animateElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animateElements.forEach(element => {
        element.classList.add('animate__animated');
    });

    const navbar = document.querySelector(".navbar");
    const brandName = document.querySelector(".brand-name");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            brandName.classList.add("logo-transition");
        } else {
            navbar.classList.remove("scrolled");
            brandName.classList.remove("logo-transition");
        }
    });

    const fadeInElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

    function fadeInOnScroll() {
        fadeInElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Event listener hozzáadása a görgetéshez
    window.addEventListener('scroll', fadeInOnScroll);
    // Indításkor is ellenőrizze az elemeket
    fadeInOnScroll();
});
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelector(".close");
    const form = document.getElementById("popupForm");

    // Ellenőrizd, hogy a felhasználó az oldal aljára ért-e
    window.addEventListener("scroll", function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            modal.style.display = "block";
        }
    });

    // Modal bezárása, ha a felhasználó a 'x' ikonra kattint
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Modal bezárása, ha a felhasználó az ablakon kívül kattint
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Form submit logika
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        // Add meg a form submit logikáját
        alert("Form submitted!");
        modal.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const logoContainer = document.querySelector('.brand-container');
    const headerLogoContainer = document.querySelector('.header-logo-container');

    // Automatikus animáció 3 másodperc után
    setTimeout(() => {
        moveLogoToHeader();
    }, 3000);

    // Animáció görgetés hatására
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            moveLogoToHeader();
        }
    });

    function moveLogoToHeader() {
        logoContainer.style.transform = 'scale(0.1) translate(-450%, -450%)';
        logoContainer.style.opacity = '0';
        setTimeout(() => {
            logoContainer.style.display = 'none';
            logoContainer.style.display = 'block';
        }, 1000); // Ugyanannyi idő, mint a CSS-ben beállított átmenet
    }

});
