const { features } = require('../utils/features');

/**
 * Elko managed models.
 */
const Elko = {
  brand: 'Elko',
  models: {
    EKO07090: [features.brightness, features.light],
    EKO07144: [features.switch_sensor],
  },
};

module.exports = {
  Elko,
};
