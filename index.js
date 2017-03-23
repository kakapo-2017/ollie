
var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: '287e95d81e634e418e138f37054a62b5', module: 'cylon-ble' }
  },


  devices: {
    ollie: { driver: 'ollie', module: 'cylon-sphero-ble' }
  },

  work: function(my) {
    my.ollie.color(0x00FFFF);
  }
}).start();
