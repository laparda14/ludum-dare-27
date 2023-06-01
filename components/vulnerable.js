var Box2D = require('box2dweb-commonjs').Box2D
var b2e = require('box2d-events')
var bs = require('bindlestiff')

module.exports = function vulnerable(group) {
  group = parseInt(group, 100)

  return bs.component('vulnerable')
    .needs('physical')
    .needs('body')
    .on('init', function() {
      var self = this

      this.body.m_userData = this.body.m_userData || {}
      this.body.m_userData.vulnerable_group = group
      this.body.m_userData.parent = this
      b2e(Box2D, this.world).fixture(
        this.fixture
        }
      })
    })
}
