var count = 0
var timer;

// DOM references
var countContainerBtn = document.getElementById('countContainerBtn')
var startBtn = document.getElementById("startBtn")
var stopBtn = document.getElementById("stopBtn")

function updateCount() {
    count += 1
}

function updateText() {
    countContainerBtn.innerHTML = count
}

function tick() {
    updateCount()
    // console.log(count)
    updateText()
}

function startCounting() {
    console.log('Starting Timer')
    timer = setInterval(tick, 1000)
}

function stopCounting() {
    clearInterval(timer)
}

function init() {
    startBtn.onclick = startCounting
    stopBtn.onclick = stopCounting
}

// init
init()