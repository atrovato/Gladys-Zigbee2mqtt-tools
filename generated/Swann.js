const { features } = require('../utils/features');

/**
 * Swann managed models.
 */
const Swann = {
  brand: 'Swann',
  models: {
    'SWO-KEF1PA': [features.switch_sensor],
    'SWO-MOS1PA': [features.motion],
    'SWO-WDS1PA': [features.door],
  },
};

module.exports = {
  Swann,
};
