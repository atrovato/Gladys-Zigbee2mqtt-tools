const { features } = require('../utils/features');

/**
 * Ubisys managed models.
 */
const Ubisys = {
  brand: 'Ubisys',
  models: {
    C4: [features.switch_sensor],
    D1: [features.brightness, features.light, features.power],
    J1: [features.door, features.power],
    S1: [features.power, features.switch, features.switch_sensor],
    'S1-R': [features.power, features.switch, features.switch_sensor],
    S2: [features.power, features.switch, features.switch_sensor],
  },
};

module.exports = {
  Ubisys,
};
