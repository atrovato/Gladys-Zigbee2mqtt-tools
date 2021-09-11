const { features } = require('../utils/features');

/**
 * EcoDim managed models.
 */
const EcoDim = {
  brand: 'EcoDim',
  models: {
    'ED-10010': [features.switch_sensor],
    'ED-10011': [features.switch_sensor],
    'ED-10012': [features.switch_sensor],
    'ED-10013': [features.switch_sensor],
    'ED-10014': [features.switch_sensor],
    'ED-10015': [features.switch_sensor],
    'Eco-Dim.05': [features.brightness, features.light],
    'Eco-Dim.07': [features.brightness, features.light],
  },
};

module.exports = {
  EcoDim,
};
