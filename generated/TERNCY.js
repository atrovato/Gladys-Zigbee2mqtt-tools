const { features } = require('../utils/features');

/**
 * TERNCY managed models.
 */
const TERNCY = {
  brand: 'TERNCY',
  models: {
    'TERNCY-DC01': [features.door, features.temperature],
    'TERNCY-LS01': [features.switch, features.switch_sensor],
    'TERNCY-PP01': [features.illuminance, features.motion, features.switch_sensor, features.temperature],
    'TERNCY-SD01': [features.switch_sensor],
  },
};

module.exports = {
  TERNCY,
};
