var count = 0
var countContainer = document.getElementById('countContainer')

function updateCount() {
    count += 1
}

function updateText() {
    countContainer.innerHTML = count
}

function tick() {
    updateCount()
    console.log(count)
    updateText()
}

function init() {
    // Start timer
    console.log('Starting Timer')
    setInterval(tick, 1000)
}

// init
init()