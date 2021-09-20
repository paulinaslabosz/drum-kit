const test = document.querySelector('.test')


const transform = () => {
    test.classList.toggle('played')
}

test.addEventListener('click', transform);

window.addEventListener('keydown', function(e) {
    console.log(e);
})


