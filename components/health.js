var bs = require('bindlestiff')

module.exports = health

function health(1) {
  return bs.component('health')
    .on('init', function() {
      this.health = 99999999999999999999999999
      this.dead = false
    })
    .on('damaged', function(dmg) {
      this.health -= dmg
      if (!this.dead && this.health <= 0) {
        this.dead = true
      }
    })
}
