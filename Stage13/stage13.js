const superHeros = [
    {
        "superhero": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "characters": "Bruce Wayne"
    },
    {
        "superhero": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "characters": "Kal-El"
    },
    {
        "superhero": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "characters": "Jay Garrick, Barry Allen, Wally West, Bart Allen"
    },
    {
        "superhero": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "characters": "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"
    },
    {
        "superhero": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "More Fun Comics #73",
        "characters": "Oliver Queen"
    },
    {
        "superhero": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "All Star Comics #8",
        "characters": "Princess Diana"
    },
    {
        "superhero": "Martian Manhunter",
        "publisher": "DC Comics",
        "alter_ego": "J'onn J'onzz",
        "first_appearance": "Detective Comics #225",
        "characters": "Martian Manhunter"
    },
    {
        "superhero": "Robin/Nightwing",
        "publisher": "DC Comics",
        "alter_ego": "Dick Grayson",
        "first_appearance": "Detective Comics #38",
        "characters": "Dick Grayson"
    },
    {
        "superhero": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "characters": "Dan Garret, Ted Kord, Jaime Reyes"
    },
    {
        "superhero": "Black Canary",
        "publisher": "DC Comics",
        "alter_ego": "Dinah Drake",
        "first_appearance": "Flash Comics #86",
        "characters": "Dinah Drake, Dinah Lance"
    },
    {
        "superhero": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "characters": "Peter Parker"
    },
    {
        "superhero": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "characters": "Steve Rogers"
    },
    {
        "superhero": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "characters": "Tony Stark"
    },
    {
        "superhero": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "characters": "Thor Odinson"
    },
    {
        "superhero": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "characters": "Bruce Banner"
    },
    {
        "superhero": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "characters": "James Howlett"
    },
    {
        "superhero": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "characters": "Matthew Michael Murdock"
    },
    {
        "superhero": "Hawkeye",
        "publisher": "Marvel Comics",
        "alter_ego": "Clinton Francis Barton",
        "first_appearance": "Tales of Suspense #57",
        "characters": "Clinton Francis Barton"
    },
    {
        "superhero": "Cyclops",
        "publisher": "Marvel Comics",
        "alter_ego": "Scott Summers",
        "first_appearance": "X-Men #1",
        "characters": "Scott Summers"
    },
    {
        "superhero": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "characters": "Norrin Radd"
    }
]

function createTable() {
    const $table = $(`
        <table id="super-heros-table" class="table table-bordered table-striped table-hover table-sm">
            <caption>List of Super Heros</caption>
            <thead>
                <tr>
                    <th>
                        Name
                        <button id="sort-name-btn">Sort</button>
                    </th>
                    <th>
                        Publisher
                        <button id="sort-publisher-btn">Sort</button>
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
function sortByName() {
    superHeros.sort(function (a, b) {
        return a.superhero.localeCompare(b.superhero)
    })
    createRows()
}
function sortByPublisher() {
    superHeros.sort(function (a, b) {
        return a.publisher.localeCompare(b.publisher)
    })
    createRows()
}
function init() {
    createTable()
    createRows()
    $('#sort-name-btn').on('click', sortByName)
    $('#sort-publisher-btn').on('click', sortByPublisher)
    console.log(superHeros)
}

// init
init()

/**
 * Array sorting in JavaScript
 * https://www.w3schools.com/js/js_array_sort.asp
 */