const { features } = require('../utils/features');

/**
 * EnOcean managed models.
 */
const EnOcean = {
  brand: 'EnOcean',
  models: {
    'PTM 215Z': [features.switch_sensor],
    'PTM 215ZE': [features.switch_sensor],
    'PTM 216Z': [features.switch_sensor],
  },
};

module.exports = {
  EnOcean,
};
