/**
 * Created by djz on 2018/10/12.
 */

class ObjectsWithImage {
    constructor(game, x, y, name) {
        this.game = game
        this.x = x
        this.y = y
        this.image = game.imageByName(name)
        this.w = this.image.width
        this.h = this.image.height
    }
    draw() {
        self = this
        this.game.drawImage(self)
    }
}