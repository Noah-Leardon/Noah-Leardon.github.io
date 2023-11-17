const seeMore = document.getElementById('more')
const childOne = document.getElementById('one')
const childTwo = document.getElementById('two')
const seeLess = document.getElementById('see-less')

function more() {
    seeMore.style.display = 'none'
    childOne.style.display = 'list-item'
    childTwo.style.display = 'list-item'
    seeLess.style.display = 'list-item'
    childOne.style.animation = 'transitionIn 1s'
    childTwo.style.animation = 'transitionIn 1.5s'
    seeLess.style.animation = 'transitionIn 2s'
}

function less() {
    seeMore.style.display = 'list-item'
    seeMore.style.animation = 'transitionIn 1s'
    childOne.style.display = 'none'
    childTwo.style.display = 'none'
    seeLess.style.display = 'none'
}

seeMore.addEventListener('click', more)
seeLess.addEventListener('click', less)