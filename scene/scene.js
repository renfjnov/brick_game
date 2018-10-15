/**
 * Created by djz on 2018/9/24.
 */

class Scene {
    constructor(game) {
        this.active = true
        this.game = game
        this.elements = []
        this.init()
    }

    init() {

    }

    draw() {
        let self = this
        for (let e of self.elements) {
            e.draw()
        }
    }

    update() {

    }
    addElement(...args) {
        for(let e of args){
            if (Array.isArray(e)) {
                for(let b of e) {
                    this.elements.push(b)
                }
            } else {
                this.elements.push(e)
            }
        }
    }
    deleteBricks() {
        let result = []
        for (let e of this.elements) {
            if (! (e instanceof  Brick)) {
                log('删除bricks', this.elements)
                result.push(e)
            }
        }
        this.elements = result
    }
    destroy() {
        this.active = false
    }
}