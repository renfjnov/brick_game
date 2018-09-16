let Game = function(fps) {

    let g = {
        actions: {},
        keyDowns: {},
    }

    g.canvas = document.querySelector('#id-canvas')
    g.context = g.canvas.getContext('2d')
    //event
    window.addEventListener('keydown', function(event) {
        g.keyDowns[event.key] = true
    })
    window.addEventListener('keyup', function(event) {
        g.keyDowns[event.key] = false
    })
    g.clearCanvas = function() {
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
    }
    g.drawImage = function(guaImage) {
        g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
    }
    g.update = function() {

    }

    g.registerActions = function(key, callback) {
        g.actions[key] = callback
    }
    // timer 需要动态的调整 fps, 所以不能用 setInterval, 要用 setTimeout
    // 在 setTimeout 中: 1. 响应按键, 2. 更新状态 3. 清空 convas 并重新画图, 4. 调用函数进行下一轮循环

    g.runLoop = function() {
        // 1. 响应按键
        let keys = Object.keys(g.actions)
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            if (g.keyDowns[key] === true) {
                g.actions[key]()
            }
        }
        // 2. 更新状态 清空 canvas, 重新绘图
        g.update()
        g.clearCanvas()
        g.draw()
        // 3. 调用下一轮循环
        setTimeout(function() {
            g.runLoop()
        }, 1000 / window.fps)
    }

    setTimeout(function() {
        g.runLoop()
    }, 1000 / window.fps)

    return g
}