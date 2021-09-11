const { features } = require('../utils/features');

/**
 * Legrand managed models.
 */
const Legrand = {
  brand: 'Legrand',
  models: {
    '064873': [features.switch_sensor],
    '064888': [features.switch],
    '067646': [features.switch_sensor],
    '067694': [features.switch_sensor],
    '067771': [features.brightness, features.light],
    '067773': [features.switch_sensor],
    '067774': [features.switch_sensor],
    '067775/741811': [features.current, features.power, features.switch, features.switch_sensor, features.voltage],
    '067776': [features.door],
    '412015': [features.power],
    '752189': [features.switch_sensor],
    FC80CC: [features.power, features.switch],
    FC80RC: [features.power, features.switch],
    ZLGP15: [features.switch_sensor],
    'ZLGP17/ZLGP18': [features.switch_sensor],
  },
};

module.exports = {
  Legrand,
};
