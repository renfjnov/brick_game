let Paddle = function(game) {
    let o = {
        x : 150,
        y : 250,
        speed : 5,
    }
    let img = game.imageByName('paddle')
    o.image = img.image
    o.w = img.w
    o.h = img.h
    o.move = function(x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.image.width) {
            x = 400 - o.image.width
        }
        o.x = x
    }
    o.moveLeft = function() {
        o.move(o.x - o.speed)
    }
    o.moveRight = function() {
        o.move(o.x + o.speed)
    }
    return o
}
