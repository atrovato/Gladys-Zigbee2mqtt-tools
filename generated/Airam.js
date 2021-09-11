const { features } = require('../utils/features');

/**
 * Airam managed models.
 */
const Airam = {
  brand: 'Airam',
  models: {
    '4713406': [features.brightness, features.light],
    '4713407': [features.brightness, features.light],
    'AIRAM-CTR.U': [features.switch_sensor],
    'CTR.UBX': [features.switch_sensor],
  },
};

module.exports = {
  Airam,
};
