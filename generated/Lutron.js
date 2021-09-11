const { features } = require('../utils/features');

/**
 * Lutron managed models.
 */
const Lutron = {
  brand: 'Lutron',
  models: {
    LZL4BWHL01: [features.switch_sensor],
    'Z3-1BRL': [features.brightness, features.switch_sensor],
  },
};

module.exports = {
  Lutron,
};
