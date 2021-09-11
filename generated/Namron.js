const { features } = require('../utils/features');

/**
 * Namron managed models.
 */
const Namron = {
  brand: 'Namron',
  models: {
    '1402755': [features.brightness, features.light],
    '3802962': [features.brightness, features.color, features.color_temperature, features.light],
    '3802964': [features.brightness, features.color_temperature, features.light],
    '3802967': [features.brightness, features.color, features.color_temperature, features.light],
    '4512700': [features.brightness, features.light],
    '4512701': [features.switch_sensor],
    '4512702': [features.switch_sensor],
    '4512703': [features.switch_sensor],
    '4512704': [features.switch],
    '4512705': [features.switch_sensor],
    '4512706': [features.switch_sensor],
    '4512719': [features.switch_sensor],
    '4512721': [features.switch_sensor],
    '4512726': [features.switch_sensor, features.voltage],
    '4512729': [features.switch_sensor],
    '89665': [features.brightness, features.color, features.color_temperature, features.light],
  },
};

module.exports = {
  Namron,
};
