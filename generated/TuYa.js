const { features } = require('../utils/features');

/**
 * Tuya managed models.
 */
const Tuya = {
  brand: 'Tuya',
  models: {
    'A5C-21F7-01': [features.brightness, features.color, features.color_temperature, features.light],
    M515EGZT: [features.door],
    SM0201: [features.humidity, features.temperature, features.voltage],
    TS0601_air_quality_sensor: [features.co2, features.humidity, features.temperature],
    TS0601_temperature_humidity_sensor: [features.humidity, features.temperature],
  },
};

module.exports = {
  Tuya,
};
