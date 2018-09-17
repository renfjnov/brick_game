let Brick = function(position) {
    let p = position
    let image = imageFromPath('brick.png')
    let o = {
        image : image,
        x : p[0],
        y : p[1],
        life : p[2] || 1,
    }

    o.kill = function() {
        o.life -= 1
    }

    o.dead = function() {
        return o.life < 1
    }
    return o
}
