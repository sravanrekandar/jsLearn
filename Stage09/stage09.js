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
    posY = y
    posX = x
    applyPositions()
}

function startMovingTo(x, y) {
    stopTimer()
    // Moving position X

    const dirX = (posX < x) ? 1 : -1 // Ternary operator
    const dirY = (posY < y) ? 1 : -1


    // console.log('Moving X')
    // while (posX !== x) {
    //     posX += dirX
    //     // console.log(posX)
    // }

    // console.log('Moving Y')
    // while (posY !== y) {
    //     posY += dirY
    //     // console.log(posY)
    // }

    const xTimer = setInterval(
        function () {
            posX += dirX
            if (
                (dirX === 1 && posX >= x) ||
                (dirX === -1 && posX <= x)
            ) {
                clearInterval(xTimer)
                return
            }
            applyPositions()
        },
        TIME_SPAN
    )

    const yTimer = setInterval(
        function () {
            posY += dirY
            if (
                (dirY === 1 && posY >= y) ||
                (dirY === -1 && posY <= y)
            ) {
                clearInterval(yTimer)
                return
            }
            applyPositions()
        },
        TIME_SPAN
    )


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

function getValidCoordinates(x, y) {
    const yLimitTop = 0
    const yLimitBottom = window.innerHeight - imageHeight
    const xLimitLeft = 0
    const xLimitRight = window.innerWidth - imageWidth

    let validX = x;
    let validY = y;


    if (y < yLimitTop) {
        validY = yLimitTop
    } else if (y > yLimitBottom) {
        validY = yLimitBottom
    }

    if (x < xLimitLeft) {
        validX = xLimitLeft
    } else if (x > xLimitRight) {
        validX = xLimitRight
    }

    return {
        x: validX,
        y: validY
    }
}

function handleDocumentClick(e) {
    console.log('[handleDocumentClick]')
    const coordinates = getValidCoordinates(e.clientX, e.clientY)
    // moveTo(coordinates.x, coordinates.y)
    startMovingTo(coordinates.x, coordinates.y)
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