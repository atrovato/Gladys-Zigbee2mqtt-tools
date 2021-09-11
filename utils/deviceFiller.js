const { slugify } = require('./slugify');

const deviceFiller = (vendor, model, features, mappedDevices = {}) => {
  const fileName = slugify(vendor);
  const lowerFileName = fileName.toLowerCase();

  if (!mappedDevices[lowerFileName]) {
    mappedDevices[lowerFileName] = { fileName, vendor, models: {} };
  }

  if (!mappedDevices[lowerFileName].models[model]) {
    mappedDevices[lowerFileName].models[model] = features;
  }
};

module.exports = deviceFiller;