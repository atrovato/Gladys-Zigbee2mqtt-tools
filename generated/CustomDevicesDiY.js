const { features } = require('../utils/features');

/**
 * Custom devices (DiY) managed models.
 */
const CustomDevicesDiY = {
  brand: 'Custom devices (DiY)',
  models: {
    // 'CC2530.ROUTER': [],
    // 'CC2538.ROUTER.V1': [],
    // 'CC2538.ROUTER.V2': [],
    DNCKATSD001: [features.brightness, features.light],
    DNCKATSW001: [features.switch],
    DNCKATSW002: [features.switch, features.switch_sensor],
    DNCKATSW003: [features.switch, features.switch_sensor],
    DNCKATSW004: [features.switch, features.switch_sensor],
    EFEKTA_PWS: [features.temperature],
    ZWallRemote0: [features.switch_sensor],
    ZeeFlora: [features.illuminance, features.temperature],
    ZigUP: [features.switch],
    'ptvo.switch': [features.switch, features.switch_sensor],
    // 'ti.router': [],
  },
};

module.exports = {
  CustomDevicesDiY,
};
