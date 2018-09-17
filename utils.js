let log = console.log.bind(console)

let imageFromPath = function (path) {
    let img = new Image()
    img.src = path
    return img
}

let collide = function(o1, o2) {
    return !(
        ((o1.image.width + o1.x) < o2.x) || ((o2.image.width + o2.x) < o1.x)
        || ((o1.image.height + o1.y) < o2.y) ||((o2.image.height + o2.y) < o1.y)
    )
}

let collideX = function(o1, o2) {
    return (collide(o1, o2) && (
            ((o1.x < o2.x) && (o1.x + o1.width > o2.x)) ||
            ((o2.x < o1.x) && (o2.x + o2.width > o1.x))
        )
    )
}

let collideY = function(o1, o2) {
    return collide(o1, o2) && (!collideX(o1, o2))
}


