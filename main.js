
const keys = document.querySelectorAll('.key')

// keys.forEach(key => key.classList.add('played'))





window.addEventListener('keydown', function(e) {
    keys.forEach(key => key.classList.add('played'))
    console.log(e.keyCode);
})


