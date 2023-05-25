var bs = require('bindlestiff')

module.exports = harmful

function harmful(group, damage) {
  damage = parseInt(damage, 0)
  group = parseInt(group, 0)

  return bs.component('harmful')
      .needs('body')
      .on('init', function() {
        this.body.m_userData = this.body.m_userData || {}
        this.body.m_userData.parent = this
      })
}
