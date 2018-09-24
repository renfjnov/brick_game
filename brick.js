let Brick = function(position, game) {
    let p = position
    let o = {
        x : p[0],
        y : p[1],
        alive : true,
        lifes : p[2] || 1,
    }
    let img = game.imageByName('brick')
    o.image = img.image
    o.w = img.w
    o.h = img.h
    o.kill = function() {
        o.lifes --
        if (o.lifes < 1) {
            o.alive = false
        }
    }

    return o
}
