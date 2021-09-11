const { features } = require('../utils/features');

/**
 * Technicolor managed models.
 */
const Technicolor = {
  brand: 'Technicolor',
  models: {
    'XHK1-TC': [features.door, features.motion, features.switch_sensor, features.temperature, features.voltage],
  },
};

module.exports = {
  Technicolor,
};
