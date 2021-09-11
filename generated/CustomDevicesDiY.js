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
    DNCKATSW001: [features.switch_sensor],
    DNCKATSW002: [features.button, features.switch_sensor],
    DNCKATSW003: [features.button, features.switch_sensor],
    DNCKATSW004: [features.button, features.switch_sensor],
    EFEKTA_PWS: [features.temperature],
    ZWallRemote0: [features.button],
    ZeeFlora: [features.illuminance, features.temperature],
    ZigUP: [features.switch_sensor],
    'ptvo.switch': [features.button, features.switch_sensor],
    // 'ti.router': [],
  },
};

module.exports = {
  CustomDevicesDiY,
};