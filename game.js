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

    g.drawImage = function(guaImage) {
        g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
    }
    g.update = function() {

    }

    g.registerActions = function(key, callback) {
        g.actions[key] = callback
    }
    // timer
    setInterval(function() {

        let keys = Object.keys(g.actions)
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            if (g.keyDowns[key] === true) {
                g.actions[key]()
            }
        }

        g.update()

        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        g.draw()
    }, 1000 / fps)

    return g
}