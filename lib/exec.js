const { exec } = require("child_process");

function execQuery(params) {
  return new Promise((resolve, reject) => {
    exec(params, (error, stdout, stderr) => {
      if (error) reject(error);
      if (stderr) reject(stderr);
      resolve(stdout);
    });
  });
}

module.exports = { execQuery };
