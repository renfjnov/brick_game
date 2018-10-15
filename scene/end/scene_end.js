
class SceneEnd extends Scene {
    init() {
        let self = this
        this.game.registerActions('r', function() {
            if (!self.active) {
                return
            }
            let s = new SceneTitle(self.game)
            self.game.replaceScene(s)
        })
    }
    draw() {
       this.game.context.fillText(`游戏结束, 按 r 返回标题界面`, 150, 150)
    }
}