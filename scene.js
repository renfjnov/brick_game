/**
 * Created by djz on 2018/9/24.
 */

var Scene = function(game) {
    var s = {
        game: game,
    }
    let point = 0
    let paddle = Paddle(game)
    let ball = Ball(game)
    enableDebugMode(true, game, ball)

    window.bricks = loadLevels(1, game)
    game.registerActions('a', function () {
        paddle.moveLeft()
    })

    game.registerActions('d', function () {
        paddle.moveRight()
    })

    game.registerActions('f', function () {
        ball.fire()
    })
    s.draw = function() {
        game.drawImage(paddle)
        game.drawImage(ball)
        for (let i = 0; i < bricks.length; i++) {
            let brick = bricks[i]
            if (brick.alive) {
                game.drawImage(brick)
            }
        }
        game.drawPoint(point)

    }
    s.update = function() {
        if (paused) {
                return
            }
        ball.move()
        if (collideX(ball, paddle)) {
            ball.bounceX()
        }
        if (collideY(ball, paddle)) {
            ball.bounceY()
        }
        for (let i = 0; i < bricks.length; i++) {
            let brick = bricks[i]
            if (brick.alive) {
                if (collideX(ball, brick)) {
                    log('x', ball.x, brick.x)
                    ball.bounceX()
                    brick.kill()
                    point += 100
                }

                if (collideY(ball, brick)) {
                    log('y', ball.y, brick.y)
                    ball.bounceY()
                    brick.kill()
                    point += 100
                }
            }
        }
    }
    return s
}