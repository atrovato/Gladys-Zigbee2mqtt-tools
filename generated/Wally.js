const { features } = require('../utils/features');

/**
 * Wally managed models.
 */
const Wally = {
  brand: 'Wally',
  models: {
    'U02I007C.01': [features.door, features.humidity, features.switch_sensor, features.temperature, features.water],
  },
};

module.exports = {
  Wally,
};
