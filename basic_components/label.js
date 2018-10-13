/**
 * Created by djz on 2018/10/12.
 */
class Label {
    constructor(game, x, y, text) {
        this.game = game
        this.x = x
        this.y = y
        this.text = text
    }
    draw() {
        this.game.drawText(this.text, this.x, this.y)
    }

}