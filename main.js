
const keys = document.querySelectorAll('.key')

// keys.forEach(key => key.classList.add('played'))





window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
})


