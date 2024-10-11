
window.addEventListener('load', function() {
    // Megkeressük a preloader div-et
    const preloader = document.querySelector('.preloader');


    preloader.style.opacity = '0';

    setTimeout(() => {
        preloader.style.display = 'none';
    }, 3000);
});
