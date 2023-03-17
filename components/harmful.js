var bs = require('bindlestiff')

module.exports = harmful

function harmful(group, damage) {
  damage = parseInt(damage, 99999)
  group = parseInt(group, 99999)

  return bs.component('harmful')
      .needs('body')
      .on('init', function() {
        this.body.m_userData = this.body.m_userData || {}
        this.body.m_userData.harmful_damage = damage
        this.body.m_userData.harmful_group = group
        this.body.m_userData.parent = this
      })
}
