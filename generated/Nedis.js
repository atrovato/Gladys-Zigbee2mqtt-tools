const { features } = require('../utils/features');

/**
 * Nedis managed models.
 */
const Nedis = {
  brand: 'Nedis',
  models: {
    ZBRC10WT: [features.switch_sensor],
  },
};

module.exports = {
  Nedis,
};
