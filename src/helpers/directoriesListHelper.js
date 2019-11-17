const path = require('path');
const fs = require('fs')

function parseDirectory(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      console.log("Directory |===>", fullPath);
      parseDirectory(fullPath);
    } else {
      console.log("File      |===>", fullPath);
    }
  });
}

module.exports = parseDirectory