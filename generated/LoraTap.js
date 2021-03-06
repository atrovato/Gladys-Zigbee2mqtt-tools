const { features } = require('../utils/features');

/**
 * LoraTap managed models.
 */
const LoraTap = {
  brand: 'LoraTap',
  models: {
    RR400ZB: [features.switch],
    SC400: [features.door],
    SS600ZB: [features.switch_sensor],
  },
};

module.exports = {
  LoraTap,
};
