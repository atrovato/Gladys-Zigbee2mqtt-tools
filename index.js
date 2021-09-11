const fs = require('fs');
const path = require('path');

const { devices } = require('zigbee-herdsman-converters');
const featureMap = require('./utils/featureMap')
const featureFormat = require('./utils/featureFormat');
const vendorFormat = require('./utils/vendorFormat');
const indexFormat = require('./utils/indexFormat');
const { slugify } = require('./utils/slugify');

const gladysDevices = {};

devices.forEach(device => {
  const { whiteLabel, exposes } = device;

  if (whiteLabel) {
    const features = Array.from(new Set(exposes.map(e => e.name || e.type)
      .map(e => featureMap[e])
      .filter(e => e !== undefined)));

    whiteLabel.forEach(deviceWhiteLabel => {
      const { vendor, model } = deviceWhiteLabel;
      const slugifiedVendor = slugify(vendor);

      if (!gladysDevices[slugifiedVendor]) {
        gladysDevices[slugifiedVendor] = { vendor, models: [] };
      }

      gladysDevices[slugifiedVendor].models.push({ model, features: featureFormat(model, features) });
    });
  }
});

const generatedDir = path.join(__dirname, 'generated');
fs.rmdirSync(generatedDir, { recursive: true, force: true });
fs.mkdirSync(generatedDir);

const fileNames = [];
Object.keys(gladysDevices).sort().forEach(fileName => {
  const { vendor, models } = gladysDevices[fileName];

  console.log('Writing', vendor, 'into', fileName);
  const details = models.sort((a, b) => a.model > b.model ? 1 : -1)
    .map(item => item.features)
    .join('\n')
  fs.writeFileSync(path.join(generatedDir, fileName + '.js'), vendorFormat(fileName, vendor, details), { flag: 'w' });
  fileNames.push(fileName);
});

fs.writeFileSync(path.join(generatedDir, 'index.js'), indexFormat(fileNames), { flag: 'w' });
