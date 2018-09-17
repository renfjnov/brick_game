let Brick = function(position) {
    let p = position
    let image = imageFromPath('brick.png')
    let o = {
        image : image,
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
