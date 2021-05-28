const { createPort } = require("./port.js");
const { execQuery } = require("./exec.js");

async function getTraffic(val) {
  const result = [];
  for (let i = 0; i < val.length; i++) {
    const query = `iptables -n -v -x -L -t filter | grep -i 'spt:${val[i]}' | awk -F' ' '{print $2}'`;
    const record = await execQuery(query);
    let traffic
    if (!record) {
      traffic = 0;
      await createPort([val[i]])
    } else {
      traffic = _filterLimit(record);
    }
    result.push({
      port: val[i],
      traffic,
    });
  }
  return result;
}

function _filterLimit(val) {
  const res = val.split(/\n/);
  return parseInt(res[0]) + parseInt(res[1]);
}

module.exports = { getTraffic }
