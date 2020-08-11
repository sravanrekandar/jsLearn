const config = {
    width: 500,
    height: 500,
    rows: 20,
    columns: 20,
    borderColor: '#DD00DD',
    cellColor: 'transparent'
}

function createContainer() {
    console.log('[createContainer]')
    const elem = document.createElement('div')
    elem.style.width = config.width + 'px'
    elem.style.height = config.height + 'px'
    elem.style.border = '1px solid ' + config.borderColor
    elem.id = 'maze'
    elem.style.position = 'relative'
    elem.style.boxSizing = 'content-box'
    document.querySelector('#mazeContainer').appendChild(elem)
}
function createCell(r, c, width, height) {
    console.log('[createCell]')
    const elem = document.createElement('div')
    elem.classList.add('cell')
    elem.style.height = (height - 1) + 'px'
    elem.style.width = (width - 1) + 'px'
    elem.style.backgroundColor = config.cellColor
    elem.style.position = 'absolute'
    elem.style.top = (r * height) + 'px'
    elem.style.left = (c * width) + 'px'
    elem.style.borderColor = config.borderColor

    elem.style.borderTopWidth = (r === 0) ? '0' : '1px'
    elem.style.borderRightWidth = (c === (config.columns - 1)) ? '0' : '1px'
    elem.style.borderLeftWidth = '0'
    elem.style.borderBottomWidth = '0'



    elem.style.borderStyle = 'solid'
    elem.style.boxSizing = 'content-box'
    document.querySelector('#maze').appendChild(elem)

}
function plotCells() {
    const cellWidth = Math.floor(config.width / config.columns)
    const cellHeight = Math.floor(config.height / config.rows)
    console.log('[plotCells]')
    for (let r = 0; r < config.rows; r += 1) {
        for (let c = 0; c < config.columns; c += 1) {
            createCell(r, c, cellWidth, cellHeight)
        }
    }
}
function init() {
    console.log('[init]')
    createContainer()
    plotCells()
}

init()