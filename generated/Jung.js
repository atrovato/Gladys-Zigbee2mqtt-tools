const { features } = require('../utils/features');

/**
 * Jung managed models.
 */
const Jung = {
  brand: 'Jung',
  models: {
    ZLLA5004M: [features.switch_sensor],
    ZLLCD5004M: [features.switch_sensor],
    ZLLHS4: [features.switch_sensor],
    ZLLLS5004M: [features.switch_sensor],
  },
};

module.exports = {
  Jung,
};
