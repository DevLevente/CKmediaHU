document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = (event) => {
        event.stopPropagation(); // Megakadályozza, hogy a kattintás felfelé terjedjen
        const popupVid = document.querySelector('.popup-vid');
        const popupVideoElement = popupVid.querySelector('video');

        popupVid.style.display = 'block';
        popupVid.style.zIndex = '1100'; // Magasabb z-index a navbarhoz képest
        popupVideoElement.src = vid.getAttribute('src');
        popupVideoElement.play(); // Elindítja a videót
    };
});

document.querySelector('.popup-vid span').onclick = () =>{
    const popupVid = document.querySelector('.popup-vid');
    const popupVideoElement = popupVid.querySelector('video');

    popupVid.style.display = 'none';
    popupVid.style.zIndex = '1000'; // Eredeti z-index visszaállítása
    popupVideoElement.pause();
    popupVideoElement.currentTime = 0;

};

document.querySelector('.popup-vid').onclick = (event) => {
    const popupVideoElement = event.currentTarget.querySelector('video');

    if (!event.target.closest('video')) {
        event.currentTarget.style.display = 'none';
        event.currentTarget.style.zIndex = '1000'; // Eredeti z-index visszaállítása
        popupVideoElement.pause();
        popupVideoElement.currentTime = 0;
    }
};
