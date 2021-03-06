const { features } = require('../utils/features');

/**
 * Schneider Electric managed models.
 */
const SchneiderElectric = {
  brand: 'Schneider Electric',
  models: {
    '41EPBDWCLMZ/354PBDMBTZ': [features.brightness, features.light],
    '545D6102': [features.brightness, features.light, features.switch_sensor],
    '545D6514': [features.switch, features.switch_sensor],
    '550D6001': [features.switch_sensor],
    'CCT5010-0001': [features.brightness, features.light],
    'CCT5011-0001/CCT5011-0002/MEG5011-0001': [features.switch],
    CCT711119: [features.energy, features.power, features.switch],
    CCTFR6400: [features.humidity, features.switch_sensor, features.temperature, features.voltage],
    CCTFR6700: [features.energy, features.power, features.temperature],
    EER40030: [features.energy, features.power, features.switch],
    EER42000: [features.energy, features.power, features.switch],
    EER50000: [features.temperature],
    EER51000: [features.temperature],
    EER53000: [features.temperature],
    'MEG5113-0300/MEG5165-0000': [features.door],
    S520530W: [features.switch],
    U201DST600ZB: [features.brightness, features.light],
    U201SRY2KWZB: [features.switch],
    U202DST600ZB: [features.brightness, features.light],
    U202SRY2KWZB: [features.switch],
    WDE002334: [features.brightness, features.light],
    WV704R0A0902: [features.temperature],
  },
};

module.exports = {
  SchneiderElectric,
};
