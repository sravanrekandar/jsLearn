let superHeros = []

function createTable() {
    const $table = $(`
        <table id="super-heros-table" class="table table-bordered table-striped table-hover table-sm">
            <caption>List of Super Heros</caption>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Publisher
                    </th>
                    <th>Alter Ego</th>
                    <th>First Appearance</th>
                    <th>Characters</th>
                <tr>
            </thead>
            <tbody>
            </tbody>
        <table>
    `)
    $('#page-content').append($table)
}
function createRows() {
    $('table#super-heros-table tbody').html('')
    for (let i = 0; i < superHeros.length; i++) {
        const hero = superHeros[i]
        const row = $(`
            <tr>
                <td>${hero.superhero}</td>
                <td>${hero.publisher}</td>
                <td>${hero.alter_ego}</td>
                <td>${hero.first_appearance}</td>
                <td>${hero.characters}</td>
            </tr>
        `)
        $('table#super-heros-table tbody').append(row)
    }
}
function processData(csvString) {
    console.log('[processData]')
    superHeros = []
    // console.log('csv String: ', csvString)
    const lines = csvString.split('\n')
    // console.log('lines', lines)
    const attributes = lines[0].split(',')
    // console.log('attributes', attributes)
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

    createTable()
    createRows()
}
function getData() {
    console.log('[getData]')
    $.ajax({
        type: "GET",
        url: "small-list-super-heros.csv",
        dataType: "text",
        success: function (response) {
            console.log('Data Received')
            processData(response)
        }
    });
}
function init() {
    console.log('[init]')
    console.log('superHeros', superHeros)
    getData()
}

// init
init()

/**
 * Array sorting in JavaScript
 * https://www.w3schools.com/js/js_array_sort.asp
 */