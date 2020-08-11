const HEROS_DATA_URL = '../data/heroes_information.csv'
let superHeros = []
let attributes = []

const sortIcon = `<i class="fas fa-sort"></i>`
const sortUpIcon = `<i class="fas fa-sort-up"></i>`
const sortDownIcon = `<i class="fas fa-sort-down"></i>`
const filterIcon = `<i class="fas fa-filter"></i>`

function createTable() {
    const $table = $(`
        <table id="super-heros-table" class="table table-striped table-hover table-sm">
            <caption>List of Super Heros</caption>
            <thead>
                <tr>
                <tr>
            </thead>
            <tbody>
            </tbody>
        <table>
    `)


    const headerCells = []
    for (let i = 0; i < attributes.length; i++) {
        const attr = attributes[i]
        const cell = $(`
            <th class="border-right">
                <div class="">
                    <div>
                        ${attr}
                    </div>
                    <div class="border-top">
                        <button data-column-name="${attr}" type="button" class="btn btn-sm btn-link js-btn-sort">${sortIcon}</button>
                        <button data-column-name="${attr}" type="button" class="btn btn-sm btn-link js-btn-filter">${filterIcon}</button>
                    </div>
                </div>
                
            </th>
        `)
        headerCells.push(cell)
    }
    $table.find('thead').append(headerCells)
    $('#page-content').append($table)
    $('#page-content').on('click', '.js-btn-sort', handleSort)
    $('#page-content').on('click', '.js-btn-filter', handleFilter)
}

function createRows() {
    $('table#super-heros-table tbody').html('')
    for (let i = 0; i < superHeros.length; i++) {
        const hero = superHeros[i]
        const row = $(`<tr />`)
        const cells = []
        for (let i = 0; i < attributes.length; i++) {
            const attr = attributes[i]
            const cell = $(`<td>${hero[attr]}</td>`)
            cells.push(cell)
        }
        row.append(cells)

        $('table#super-heros-table tbody').append(row)
    }
}

function processData(csvString) {
    console.log('[processData]')
    superHeros = []
    // console.log('csv String: ', csvString)
    const lines = csvString.split('\n')
    // console.log('lines', lines)
    attributes = lines[0].split(',')
    console.log('attributes', attributes)
    for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i]
        if (line.length === 0) {
            continue
        }
        const values = line.split(',')
        // console.log(line, values)

        // Creating hero object by line
        const hero = {}
        for (let j = 0; j < attributes.length; j += 1) {
            const attr = attributes[j]
            hero[attr] = values[j]
        }

        // console.log('hero:', hero)
        superHeros.push(hero)
    }

    console.log('superHeros', superHeros)
}

function getData() {
    console.log('[getData]')
    $.ajax({
        type: "GET",
        url: HEROS_DATA_URL,
        dataType: "text",
        success: function (response) {
            console.log('Data Received')
            processData(response)
            createTable()
            createRows()
        }
    });
}

function handleSort(e) {
    const $button = $(e.target).closest('button')
    const columnName = $button.attr('data-column-name')
    console.log('columnName', columnName)
}

function handleFilter(e) {
    console.log($(e.target).closest('button'))
}

function init() {
    console.log('[init]')
    console.log('superHeros', superHeros)
    getData()
}

// init
init()