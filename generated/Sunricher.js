const { features } = require('../utils/features');

/**
 * Sunricher managed models.
 */
const Sunricher = {
  brand: 'Sunricher',
  models: {
    '50208693': [features.switch_sensor],
    'HK-ZD-CCT-A': [features.brightness, features.color_temperature, features.light],
    'HK-ZD-RGBCCT-A': [features.brightness, features.color, features.color_temperature, features.light],
    'SR-ZG2835': [features.switch_sensor],
    'SR-ZG9001K12-DIM-Z4': [features.switch_sensor],
    'SR-ZG9001K2-DIM': [features.switch_sensor],
    'SR-ZG9001K2-DIM2': [features.switch_sensor],
    'SR-ZG9001K4-DIM2': [features.switch_sensor],
    'SR-ZG9001K8-DIM': [features.switch_sensor],
    'SR-ZG9001T4-DIM-EU': [features.switch_sensor],
    'SR-ZG9040A': [features.brightness, features.current, features.energy, features.light, features.power, features.voltage],
    'SR-ZG9040A-S': [features.brightness, features.light],
    'SR-ZG9080A': [features.door],
    'SR-ZG9100A-S': [features.switch],
    'SRP-ZG9105-CC': [features.brightness, features.light],
    'ZG192910-4': [features.brightness, features.color_temperature, features.light],
    'ZG2819S-CCT': [features.switch_sensor],
    ZG2835: [features.switch_sensor],
    ZG2835RAC: [features.brightness, features.current, features.energy, features.light, features.power, features.voltage],
    ZG2858A: [features.switch_sensor],
    'ZG9101SAC-HP': [features.brightness, features.light],
    'ZG9101SAC-HP-Switch': [features.switch],
  },
};

module.exports = {
  Sunricher,
};
