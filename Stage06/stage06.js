// DOM references
const btnUp = document.querySelector('#btn-up')
const btnDown = document.querySelector('#btn-down')
const btnRight = document.querySelector('#btn-right')
const btnLeft = document.querySelector('#btn-left')
const balloon = document.querySelector('#balloon')

// Data
let posX = 20
let posY = 20
const padding = 20

// Actions
function applyPositions() {
    console.log('[applyPositions]')
    balloon.style.left = posX + 'px';
    balloon.style.top = posY + 'px';
}


function moveUp() {
    console.log('[moveUp]')
    posY -= padding
    applyPositions()
}

function moveDown() {
    console.log('[moveDown]')
    posY += padding
    applyPositions()
}

function moveRight() {
    console.log('[moveRight]')
    posX += padding
    applyPositions()
}

function moveLeft() {
    console.log('[moveLeft]')
    posX -= padding
    applyPositions()
}

function handleDocumentKeyDown(e) {
    console.log('[handleDocumentKeyDown]', e.key)
    switch (e.key) {
        case 'ArrowUp':
            moveUp()
            break
        case 'ArrowDown':
            moveDown()
            break
        case 'ArrowRight':
            moveRight()
            break
        case 'ArrowLeft':
            moveLeft()
            break
    }
}

function init() {
    console.log('[init]')
    applyPositions()

    // Button Click Bindings
    btnUp.addEventListener('click', moveUp) // btnUp.onclick = moveUp
    btnDown.addEventListener('click', moveDown) // btnDown.onclick = moveDown
    btnRight.addEventListener('click', moveRight) // btnRight.onclick = moveRight
    btnLeft.addEventListener('click', moveLeft) // btnLeft.onclick = moveLeft

    // Document Key bindings
    document.addEventListener('keydown', handleDocumentKeyDown);
}
// init
init()