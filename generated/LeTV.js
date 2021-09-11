const { features } = require('../utils/features');

/**
 * LeTV managed models.
 */
const LeTV = {
  brand: 'LeTV',
  models: {
    'LeTV.8KEY': [features.switch_sensor],
  },
};

module.exports = {
  LeTV,
};
