let Ball = function(game) {
    let o = game.imageByName('ball')
    o.x = 150
    o.y = 100
    o.speedX = 10
    o.speedY = 10
    o.fired = false

    o.move = function() {

        if (o.x < 0 || o.x > game.canvas.width) {
            o.bounceX()
        }
        if (o.y < 0 || o.y > game.canvas.height) {
            o.bounceY()
        }
        if (o.fired) {
            o.x += o.speedX
            o.y += o.speedY
        }

    }
    o.fire = function() {
        o.fired = true
    }
    o.bounceX = function() {
        o.speedX *= -1
    }
    o.bounceY = function() {
        o.speedY *= -1
    }
    return o
}
