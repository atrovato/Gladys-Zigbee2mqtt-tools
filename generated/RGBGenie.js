const { features } = require('../utils/features');

/**
 * RGB Genie managed models.
 */
const RGBGenie = {
  brand: 'RGB Genie',
  models: {
    'ZB-3009': [features.switch_sensor],
    'ZB-5001': [features.switch_sensor],
    'ZB-5004': [features.switch_sensor],
    'ZB-5028': [features.switch_sensor],
    'ZB-5121': [features.switch_sensor],
    'ZB-5122': [features.switch_sensor],
    'ZGRC-KEY-013': [features.switch_sensor],
  },
};

module.exports = {
  RGBGenie,
};
