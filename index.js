const { devices } = require('zigbee-herdsman-converters');

const featureExtractor = require('./utils/featureExtractor');
const deviceFiller = require('./utils/deviceFiller');
const writeFiles = require('./utils/writeFiles');

const gladysDevices = {};

const unmappedFeatures = new Set();
devices.forEach(device => {
  const { whiteLabel, vendor, model } = device;
  const features = featureExtractor(device, unmappedFeatures);

  if (whiteLabel) {
    whiteLabel.sort((a, b) => a.model > b.model ? 1 : -1).forEach(deviceWhiteLabel => {
      const { vendor, model } = deviceWhiteLabel;
      deviceFiller(vendor, model, features, gladysDevices);
    });
  }

  if (vendor && model) {
    deviceFiller(vendor, model, features, gladysDevices);
  }
});

writeFiles(__dirname, gladysDevices);

const unmapped = Array.from(unmappedFeatures).sort();
if (unmapped.length > 0) {
  console.warn('-----------------------------------');
  console.warn(unmapped.length, 'unmapped features', unmapped);
}
