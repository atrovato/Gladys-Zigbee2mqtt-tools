const { features } = require('../utils/features');

/**
 * TuYa managed models.
 */
const TuYa = {
  brand: 'TuYa',
  models: {
    'A5C-21F7-01': [features.brightness, features.color, features.color_temperature, features.light],
    'D3-DPWK-TY': [features.temperature],
    'DT82LEMA-1.2N': [features.door],
    'E220-KR4N0Z0-HA': [features.switch_sensor],
    GTZ02: [features.door, features.switch_sensor, features.temperature],
    HY08WE: [features.temperature],
    M515EGZT: [features.door],
    RH3040: [features.motion],
    // 'S-LUX-ZB': [],
    SM0201: [features.humidity, features.temperature, features.voltage],
    SNTZ007: [features.door],
    SNTZ009: [features.water],
    TS0001: [features.switch_sensor],
    TS0002: [features.switch_sensor],
    TS0004: [features.switch_sensor],
    TS0006: [features.switch_sensor],
    TS0011: [features.switch_sensor],
    TS0012: [features.switch_sensor],
    TS0013: [features.switch_sensor],
    TS0014: [features.switch_sensor],
    TS0041: [features.button],
    TS0042: [features.button],
    TS0043: [features.button],
    TS0044: [features.button],
    TS004F: [features.button],
    TS0101: [features.switch_sensor],
    TS0108: [features.switch_sensor],
    TS0115: [features.switch_sensor],
    TS011F_2_gang_wall: [features.switch_sensor],
    TS011F_circuit_breaker: [features.switch_sensor],
    TS011F_din_smart_relay: [features.current, features.energy, features.power, features.switch_sensor, features.voltage],
    TS011F_plug: [features.current, features.energy, features.power, features.switch_sensor, features.voltage],
    TS011F_plug_2: [features.switch_sensor],
    TS011F_socket_module: [features.switch_sensor],
    TS011F_wall_outlet: [features.switch_sensor],
    TS0121_plug: [features.current, features.energy, features.power, features.switch_sensor, features.voltage],
    TS0201: [features.humidity, features.temperature, features.voltage],
    TS0202: [features.motion],
    TS0203: [features.door],
    // TS0207_repeater: [],
    TS0207_water_leak_detector: [features.water],
    // TS0210: [],
    TS0215A_remote: [features.button],
    TS0215A_sos: [features.button],
    // TS0216: [],
    TS0222: [features.illuminance],
    TS0501B: [features.brightness, features.light],
    TS0502A: [features.brightness, features.color_temperature, features.light],
    TS0502B: [features.brightness, features.color_temperature, features.light],
    TS0503A: [features.brightness, features.color, features.light],
    TS0503B: [features.brightness, features.color, features.light],
    TS0504A: [features.brightness, features.color, features.color_temperature, features.light],
    TS0504B: [features.brightness, features.color, features.light],
    TS0505A: [features.brightness, features.color, features.color_temperature, features.light],
    TS0505A_led: [features.brightness, features.color_temperature, features.light],
    TS0505B: [features.brightness, features.color, features.color_temperature, features.light],
    TS0601_air_quality_sensor: [features.co2, features.humidity, features.temperature],
    TS0601_cover: [features.door],
    TS0601_dimmer: [features.brightness, features.light],
    TS0601_din: [features.current, features.energy, features.power, features.switch_sensor, features.voltage],
    TS0601_gas_sensor: [features.smoke],
    TS0601_smoke: [features.smoke],
    TS0601_switch: [features.switch_sensor],
    TS0601_switch_2_gang: [features.switch_sensor],
    TS0601_switch_3_gang: [features.switch_sensor],
    TS0601_switch_4_gang: [features.switch_sensor],
    TS0601_temperature_humidity_sensor: [features.humidity, features.temperature],
    TS0601_thermostat: [features.door, features.switch_sensor, features.temperature],
    TS0601_water_sensor: [features.water],
    TS130F: [features.door],
    TT001ZAV20: [features.humidity, features.temperature],
    TYZS1L: [features.light],
    'U86KCJ-ZP': [features.button],
    'U86KWF-ZPSJ': [features.temperature],
    WHD02: [features.switch_sensor],
    ZN231392: [features.switch_sensor],
    gq8b1uv: [features.brightness, features.light],
  },
};

module.exports = {
  TuYa,
};
