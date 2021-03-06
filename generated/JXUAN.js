const { features } = require('../utils/features');

/**
 * J.XUAN managed models.
 */
const JXUAN = {
  brand: 'J.XUAN',
  models: {
    DSZ01: [features.door],
    PRZ01: [features.motion],
    SPZ01: [features.power, features.switch],
    WSZ01: [features.switch_sensor],
  },
};

module.exports = {
  JXUAN,
};
