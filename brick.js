let Brick = function() {
    let image = imageFromPath('brick.png')
    let o = {
        image : image,
        x : 50,
        y : 50,
        life : 2,
    }

    o.kill = function() {
        o.life -= 1
    }

    o.dead = function() {
        return o.life < 1
    }
    return o
}
