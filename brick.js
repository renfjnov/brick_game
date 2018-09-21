let Brick = function(position, game) {
    let p = position
    let o = {
        image : game.images.brick,
        x : p[0],
        y : p[1],
        alive : true,
        lifes : p[2] || 1,
    }

    o.kill = function() {
        o.lifes --
        if (o.lifes < 1) {
            o.alive = false
        }
    }

    return o
}
