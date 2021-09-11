const fs = require('fs');
const path = require('path');

const vendorTemplate = require('../template/vendor');
const mainTemplate = require('../template/main');

const writeFiles = (dirname, gladysDevices = {}) => {
  const generatedDir = path.join(dirname, 'generated');
  fs.rmdirSync(generatedDir, { recursive: true, force: true });
  fs.mkdirSync(generatedDir);

  const fileNames = [];
  Object.keys(gladysDevices).sort().forEach(fileName => {
    const { vendor, models } = gladysDevices[fileName];

    // console.log('Writing', vendor, 'into', fileName);
    fs.writeFileSync(path.join(generatedDir, fileName + '.js'), vendorTemplate(fileName, vendor, models), { flag: 'w', mode: 644 });
    fileNames.push(fileName);
  });

  fs.writeFileSync(path.join(generatedDir, 'index.js'), mainTemplate(fileNames), { flag: 'w', mode: 644 });
};

module.exports = writeFiles;