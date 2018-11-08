let Game = function(fps, images, runCallBack) {
    // images 是一个对象, 存储图片的名字和路径
    let g = {
        scene:null,
        actions: {},
        keyDowns: {},
        images: {
            ball: null,
            paddle: null,
            brick_1: null,
            brick_2: null,
            save_button: null,
            editor_button: null,
            start_button: null,
        },
    }

    g.canvas = document.querySelector('#id-canvas')
    g.context = g.canvas.getContext('2d')
    //event
    g.imageByName = function(name) {
        return g.images[name]
    }
    window.addEventListener('keydown', function(event) {
        g.keyDowns[event.key] = true
    })
    window.addEventListener('keyup', function(event) {
        g.keyDowns[event.key] = false
    })
    g.clearCanvas = function() {
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
    }
    g.drawImage = function(o) {
        g.context.drawImage(o.image, o.x, o.y)
    }
    g.drawText = function(text, x=30, y =290){
        g.context.fillText(text, x, y)
    }
    g.update = function() {
        g.scene.update()
    }
    g.draw = function() {
        g.scene.draw()
    }
    g.registerActions = function(key, callback) {
        g.actions[key] = callback
    }
    // timer 需要动态的调整 fps, 所以不能用 setInterval, 要用 setTimeout
    // 在 setTimeout 中: 1. 响应按键, 2. 更新状态 3. 清空 convas 并重新画图, 4. 调用函数进行下一轮循环
    g.replaceScene = function(scene) {
        g.scene.destroy()
        log(g.scene.active)
        g.scene = scene
    }
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

    g.run = function() {
        // load 图片并保存
        let loads = []
        let names = Object.keys(g.images)
        // log(names)
        for (let i = 0; i < names.length; i++) {
            let name = names[i]
            let img = new Image()
            img.src = images[name]
            // g.images[name] = img
            img.onload = function() {
                g.images[name] = img
                loads.push(1)
                // log(loads)
                if (loads.length === names.length) {
                    setTimeout(function() {
                        // log('回调之前的 g.images', g.images)
                        runCallBack(g)
                        g.runLoop()
                    }, 1000 / window.fps)
                }
            }
        }

    }

    g.run()
    return g
}