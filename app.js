const { getTraffic } = require('./lib/traffic.js');
const port = [10222, 10033, 10474, 52141, 5141, 2224, 33714]

getTraffic(port).then(res => {
  console.log(res);
})