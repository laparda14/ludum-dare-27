var createGame = require('./game')
var canvas = document.getElementById('main')

canvas.width = 1000
canvas.height = 800

module.exports = createGame(canvas)

document.body.appendChild(canvas)
