class Ball extends ObjectsWithImage {
    constructor(game) {
        super(game, 250, 150, 'ball')
        this.speedX = 10
        this.speedY = -10
        this.fired = false
    }
    move() {
        let o = this
        if (o.x < 0 || o.x > o.game.canvas.width) {
            o.bounceX()
        }
        if (o.y < 0 || o.y > o.game.canvas.height) {
            o.bounceY()
        }
        if (o.fired) {
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    fire() {
        this.fired = true
    }
    bounceX () {
        this.speedX *= -1
    }
    bounceY() {
        this.speedY *= -1
    }
}