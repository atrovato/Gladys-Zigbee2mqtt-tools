const { features } = require('../utils/features');

/**
 * Echostar managed models.
 */
const Echostar = {
  brand: 'Echostar',
  models: {
    SAGE206611: [features.switch_sensor],
    SAGE206612: [features.switch_sensor],
  },
};

module.exports = {
  Echostar,
};
