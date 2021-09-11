const { features } = require('../utils/features');

/**
 * Smart9 managed models.
 */
const Smart9 = {
  brand: 'Smart9',
  models: {
    S9TSZGB: [features.switch_sensor],
    S9ZGBRC01: [features.switch_sensor],
  },
};

module.exports = {
  Smart9,
};
