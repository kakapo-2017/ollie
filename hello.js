
var Cylon = require('cylon');

Cylon.robot({
  work: function(my) {
    every((1).second(), function () {
      console.log('test')
    })
  }
}).start();
