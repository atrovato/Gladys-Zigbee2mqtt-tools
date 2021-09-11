const { features } = require('../utils/features');

/**
 * JAVIS managed models.
 */
const JAVIS = {
  brand: 'JAVIS',
  models: {
    'JS-SLK2-ZB': [features.switch_sensor],
  },
};

module.exports = {
  JAVIS,
};
