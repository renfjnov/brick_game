class Paddle extends ObjectsWithImage {
    constructor(game) {
        super(game, 150, 250, 'paddle')
        this.speed = 7
    }
    _move(x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - this.w) {
            x = 400 - this.w
        }
        this.x = x
    }
    moveLeft() {
        this._move(this.x - this.speed)
    }
    moveRight () {
        this._move(this.x + this.speed)
    }

}