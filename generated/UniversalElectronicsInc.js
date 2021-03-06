const { features } = require('../utils/features');

/**
 * Universal Electronics Inc managed models.
 */
const UniversalElectronicsInc = {
  brand: 'Universal Electronics Inc',
  models: {
    'XHK1-UE': [features.door, features.motion, features.switch_sensor, features.temperature, features.voltage],
    'XHS2-UE': [features.door, features.temperature],
  },
};

module.exports = {
  UniversalElectronicsInc,
};
