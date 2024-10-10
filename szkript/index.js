
window.onload = function() { // Videó automatikus indítása 5 másodperc késleltetéssel
    const video = document.getElementById('vidi');
    const countdown = document.getElementById('countdown');
    let timeLeft = 5;
    const countdownInterval = setInterval(() => {
        timeLeft--;
        countdown.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdown.style.display = 'none'; // Visszaszámláló eltüntetése
            video.play();
        }
    }, 1000);

// Mute/Unmute gomb működése
    const muteButton = document.getElementById('muteButton');
    muteButton.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            video.muted = true;
            muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
}
