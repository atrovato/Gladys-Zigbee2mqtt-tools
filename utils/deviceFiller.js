const { slugify } = require('./slugify');

const deviceFiller = (vendor, model, features, mappedDevices = {}) => {
  const slugifiedVendor = slugify(vendor);

  if (!mappedDevices[slugifiedVendor]) {
    mappedDevices[slugifiedVendor] = { vendor, models: [] };
  }

  mappedDevices[slugifiedVendor].models.push({ model, features });
};

module.exports = deviceFiller;