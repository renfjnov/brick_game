class Brick extends ObjectsWithImage {
    constructor(position, game) {
        let _x = position[0]
        let _y = position[1]
        let _lives = position[2] || 1
        let _name = 'brick_' + _lives
        super(game, _x, _y, _name)
        this.lifes = _lives
        this.alive = true
    }
    kill() {
        let o = this
        o.lifes --
        if (o.lifes < 1) {
            o.alive = false
        }
    }
    draw() {
        if (this.alive) {
            super.draw()
        }
    }
}
