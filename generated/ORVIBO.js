const { features } = require('../utils/features');

/**
 * Orvibo managed models.
 */
const Orvibo = {
  brand: 'Orvibo',
  models: {
    RL804CZB: [features.brightness, features.color, features.color_temperature, features.light],
  },
};

module.exports = {
  Orvibo,
};
