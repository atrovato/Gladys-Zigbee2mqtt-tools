const { features } = require('../utils/features');

/**
 * Easyfit by EnOcean managed models.
 */
const EasyfitByEnOcean = {
  brand: 'Easyfit by EnOcean',
  models: {
    EWSxZ: [features.switch_sensor],
  },
};

module.exports = {
  EasyfitByEnOcean,
};
