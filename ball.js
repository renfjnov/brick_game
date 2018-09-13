let Ball = function() {
    let image = imageFromPath('ball.png')
    let o = {
        image : image,
        x : 150,
        y : 100,
        speedX : 10,
        speedY : 10,
        fired : false,
    }

    o.move = function() {
        log('move')
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
