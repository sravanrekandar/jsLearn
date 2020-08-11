class SuperHero {
    posX = 20
    posY = 20
    padding = 50
    imageHeight = 84
    imageWidth = 50
    $hero = null
    upKey = ''
    downKey = ''
    leftKey = ''
    rightKey = ''


    constructor(options) {
        // Method bindings
        this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this)
        this.applyPositions = this.applyPositions.bind(this)
        this.moveUp = this.moveUp.bind(this)
        this.moveDown = this.moveDown.bind(this)
        this.moveRight = this.moveRight.bind(this)
        this.moveLeft = this.moveLeft.bind(this)

        this.$hero = $(options.domElement)
        this.$hero.prop('title', options.title)

        this.upKey = options.upKey
        this.downKey = options.downKey
        this.leftKey = options.leftKey
        this.rightKey = options.rightKey

        this.posX = options.posX || this.posX
        this.posY = options.posY || this.posY
        this.applyPositions()

        this.padding = options.padding || this.padding

        $(document).on('keydown', this.handleDocumentKeyDown);
    }

    applyPositions() {
        console.log('[applyPositions]')
        this.$hero.animate({
            left: this.posX,
            top: this.posY,
        }, 200);
    }

    moveUp() {
        console.log('[moveUp]')
        if (this.posY - this.padding <= 0) {
            return
        }
        this.posY -= this.padding
        this.applyPositions()
    }

    moveDown() {
        console.log('[moveDown]')
        if (this.posY + this.padding + this.imageHeight >= window.innerHeight) {
            return
        }
        this.posY += this.padding
        this.applyPositions()
    }

    moveRight() {
        console.log('[moveRight]')
        if (this.posX + this.padding + this.imageWidth >= window.innerWidth) {
            return
        }
        this.posX += this.padding
        this.applyPositions()
    }

    moveLeft() {
        console.log('[moveLeft]')
        if (this.posX - this.padding <= 0) {
            return
        }
        this.posX -= this.padding
        this.applyPositions()
    }

    handleDocumentKeyDown(e) {
        console.log('[handleDocumentKeyDown]', e.key)
        switch (e.key) {
            case this.upKey:
                this.moveUp()
                break
            case this.downKey:
                this.moveDown()
                break
            case this.rightKey:
                this.moveRight()
                break
            case this.leftKey:
                this.moveLeft()
                break
        }
    }
}

function init() {
    console.log('[init]')
    const ironMan = new SuperHero({
        title: 'Iron Man',
        domElement: '#ironMan',
        upKey: 'ArrowUp',
        downKey: 'ArrowDown',
        leftKey: 'ArrowLeft',
        rightKey: 'ArrowRight',
    });
    const captainAmerica = new SuperHero({
        title: 'Captain America',
        domElement: '#captainAmerica',
        upKey: 'w',
        downKey: 's',
        leftKey: 'a',
        rightKey: 'd',
        posX: 100,
        posY: 50,
        padding: 100
    })
}
// init
init()