/**
 * Created by djz on 2018/9/24.
 */

var SceneEnd = function(game) {
    var s = {
        game: game,
    }
    s.draw = function() {
        game.context.fillText(`游戏结束, 按 r 返回标题界面`, 150, 150)
    }
    s.update = function() {
    }
    return s
}