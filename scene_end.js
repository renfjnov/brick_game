/**
 * Created by djz on 2018/9/24.
 */

var SceneEnd = function(game) {
    var s = {
        game: game,
    }
    s.draw = function() {
        game.drawPoint('游戏结束')
    }
    s.update = function() {
    }
    return s
}