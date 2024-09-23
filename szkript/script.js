document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");


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
    const logoContainer = document.querySelector('.brand-container');
    const headerLogoContainer = document.querySelector('.header-logo-container');

    // Automatikus animáció 3 másodperc után
    setTimeout(() => {
        moveLogoToHeader();
    }, 3000);

    // Animáció görgetés hatására
    window.addEventListener('scroll', () => {
        if (window.scrollY !== 0) {
            moveLogoToHeader();
        }
    });
    window.addEventListener('click', () => {
        moveLogoToHeader();

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
