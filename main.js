

const keys = document.querySelectorAll('.key')

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('played');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('played');
}


window.addEventListener('keydown',playSound)
keys.forEach(key => key.addEventListener('transitionend', removeTransition))