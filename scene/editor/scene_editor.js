/**
 * Created by djz on 2018/9/26.
 */
class SaveButton extends ObjectsWithImage {
    constructor(game) {
        super(game, 10, 260, 'save_button')
    }
}

class FinishButton extends ObjectsWithImage {
    constructor(game) {
        super(game, 290, 260, 'start_button')
    }
}


class SceneEditor extends Scene {
    // 1. 画两个不同颜色的砖
    // 2. 用户点击砖块时, new 一个对应的砖
    // 3. 用户拖动砖块, 松开鼠标时砖块放到响应的位置上, 保存数据
    init() {
        let game = this.game
        this.basePosition1 = [150, 250, 1]
        this.basePosition2 = [200, 250, 2]
        this.baseBrick1 = new Brick(this.basePosition1, game)
        this.baseBrick2 = new Brick(this.basePosition2, game)
        this.saveButton = new SaveButton(this.game)
        this.startButton = new FinishButton(this.game)
        this.elements.push(this.baseBrick1, this.baseBrick2, this.saveButton, this.startButton)
        let newBrick = null
        let enableDrag = false
        let self = this

        game.canvas.addEventListener('mousedown', function(event) {
            if (!self.active) {
                return
            }
            if (isClicked(event, self.baseBrick1)) {
                newBrick = new Brick(self.basePosition1, game)
                self.elements.push(newBrick)
                enableDrag = true
            } else if (isClicked(event, self.baseBrick2)) {
                newBrick = new Brick(self.basePosition2, game)
                self.elements.push(newBrick)
                enableDrag = true
            } else if (isClicked(event, self.saveButton)) {
                self.save()
            } else if (isClicked(event, self.startButton)) {
                let s = new SceneMain(game)
                game.replaceScene(s)
            }
        })
        game.canvas.addEventListener('mousemove', function(event) {
            if (!self.active) {
                return
            }
            if (newBrick && enableDrag) {
                newBrick.x = event.offsetX
                newBrick.y = event.offsetY
            }
        })
        game.canvas.addEventListener('mouseup', function(event) {
            if (!self.active) {
                return
            }
            enableDrag = false
            if (newBrick && newBrick.y < 200) {
                newBrick = null
            }
        })
    }
    update() {
    }
    save() {
        let result = []
        for(let e of this.elements) {
            if(e.y < 200) {
                let l = [e.x, e.y, e.lifes]
                result.push(l)
            }
        }
        log('ddd', levels)
        levels.push(result)
        alert(`关卡数据已保存在第${levels.length}关。`)
    }
}