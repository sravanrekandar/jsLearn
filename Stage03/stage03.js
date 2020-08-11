var count = 0
var countContainerBtn = document.getElementById('countContainerBtn')
var timer;

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

function toggleCounting() {
    //console.log('Timer', timer)
    if (timer === undefined) {
        startCounting()
    } else {
        stopCounting()
        timer = undefined
    }
}

function init() {
    countContainerBtn.onclick = toggleCounting
}

// init
init()