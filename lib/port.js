const { execQuery } = require("./exec.js");

async function createPort(val) {
  return await _handlePort("A", val);
}

async function deletePort(val) {
  return await _handlePort("D", val);
}

async function _handlePort(type, val) {
  const failed = [];
  for (let i = 0; i < val.length; i++) {
    const query = `iptables -${type} OUTPUT -p tcp --sport ${val[i]} && iptables -${type} OUTPUT -p udp --sport ${val[i]}`;
    try {
      await execQuery(query);
    } catch {
      failed.push(val[i]);
    }
  }
  return failed;
}

module.exports = { createPort, deletePort };
