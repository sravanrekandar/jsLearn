// DOM references
const balloon = document.querySelector('#balloon')

// Data
const TIME_SPAN = 1

let posX = 20
let posY = 20
const padding = 1
const imageHeight = 84
const imageWidth = 50
let timer

// Actions
function applyPositions() {
    console.log('[applyPositions]')
    balloon.style.left = `${posX}px`; // Using STRING INTERPOLATION
    balloon.style.top = `${posY}px`; // python equivalent: f"{posX}px" 
}

function moveUp() {
    console.log('[moveUp]')
    if (posY - padding <= 0) {
        stopTimer()
        return
    }
    posY -= padding
    applyPositions()
}

function moveDown() {
    console.log('[moveDown]')
    if (posY + padding + imageHeight >= window.innerHeight) {
        stopTimer()
    }
    posY += padding
    applyPositions()
}

function moveRight() {
    console.log('[moveRight]')
    if (posX + padding + imageWidth >= window.innerWidth) {
        stopTimer()
    }
    posX += padding
    applyPositions()
}

function moveLeft() {
    console.log('[moveLeft]')
    if (posX - padding <= 0) {
        stopTimer()
        return
    }
    posX -= padding
    applyPositions()
}

function startMovingUp() {
    stopTimer()
    timer = setInterval(moveUp, TIME_SPAN)
}

function startMovingDown() {
    stopTimer()
    timer = setInterval(moveDown, TIME_SPAN)
}

function startMovingRight() {
    stopTimer()
    timer = setInterval(moveRight, TIME_SPAN)
}

function startMovingLeft() {
    stopTimer()
    timer = setInterval(moveLeft, TIME_SPAN)
}

function stopTimer() {
    clearInterval(timer)
}

function moveTo(x, y) {
    const yLimitTop = 0
    const yLimitBottom = window.innerHeight - imageHeight
    const xLimitLeft = 0
    const xLimitRight = window.innerWidth - imageWidth


    if (y < yLimitTop) {
        posY = yLimitTop
    } else if (y > yLimitBottom) {
        posY = yLimitBottom
    } else {
        posY = y
    }

    if (x < xLimitLeft) {
        posX = xLimitLeft
    } else if (x > xLimitRight) {
        posX = xLimitRight
    } else {
        posX = x
    }
    applyPositions()
}

function handleDocumentKeyDown(e) {
    console.log('[handleDocumentKeyDown]', e.key)
    switch (e.key) {
        case ' ':
            stopTimer()
            break
        case 'ArrowUp':
            startMovingUp()
            break
        case 'ArrowDown':
            startMovingDown()
            break
        case 'ArrowRight':
            startMovingRight()
            break
        case 'ArrowLeft':
            startMovingLeft()
            break
    }
}

function handleDocumentClick(e) {
    console.log('[handleDocumentClick]')
    const clientX = e.clientX
    const clientY = e.clientY
    moveTo(clientX, clientY)
}

function init() {
    console.log('[init]')
    applyPositions()

    // Document Key bindings
    document.addEventListener('keydown', handleDocumentKeyDown);
    document.addEventListener('click', handleDocumentClick);
}
// init
init()