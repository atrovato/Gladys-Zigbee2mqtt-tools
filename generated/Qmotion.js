const { features } = require('../utils/features');

/**
 * Qmotion managed models.
 */
const Qmotion = {
  brand: 'Qmotion',
  models: {
    HDM40PV620: [features.door],
    'QZR-ZIG2400': [features.switch_sensor],
  },
};

module.exports = {
  Qmotion,
};
