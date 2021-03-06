const { features } = require('../utils/features');

/**
 * ClickSmart+ managed models.
 */
const ClickSmart = {
  brand: 'ClickSmart+',
  models: {
    CMA30035: [features.switch],
    CMA30036: [features.switch],
  },
};

module.exports = {
  ClickSmart,
};
