const { features } = require('../utils/features');

/**
 * iCasa managed models.
 */
const ICasa = {
  brand: 'iCasa',
  models: {
    'ICZB-B1FC60/B3FC64/B2FC95/B2FC125': [features.brightness, features.color_temperature, features.light],
    'ICZB-DC11': [features.brightness, features.light],
    'ICZB-IW11D': [features.brightness, features.light],
    'ICZB-IW11SW': [features.switch],
    'ICZB-KPD12': [features.switch_sensor],
    'ICZB-KPD14S': [features.switch_sensor],
    'ICZB-KPD18S': [features.switch_sensor],
    'ICZB-R11D': [features.brightness, features.light],
    'ICZB-R12D': [features.brightness, features.light],
    'ICZB-RM11S': [features.switch_sensor],
  },
};

module.exports = {
  ICasa,
};
