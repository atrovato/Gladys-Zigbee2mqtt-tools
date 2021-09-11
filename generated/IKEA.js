const { features } = require('../utils/features');

/**
 * IKEA managed models.
 */
const IKEA = {
  brand: 'IKEA',
  models: {
    'E1524/E1810': [features.switch_sensor],
    'E1525/E1745': [features.motion],
    'E1603/E1702/E1708': [features.switch],
    E1743: [features.switch_sensor],
    E1744: [features.switch_sensor],
    // E1746: [],
    E1757: [features.door],
    E1766: [features.switch_sensor],
    E1812: [features.switch_sensor],
    E1836: [features.switch],
    E1841: [features.switch_sensor],
    E1842: [features.switch],
    E1926: [features.door],
    'E2001/E2002': [features.switch_sensor],
    'ICPSHC24-10EU-IL-1': [features.brightness, features.light],
    'ICPSHC24-30-IL44-1': [features.brightness, features.light],
    'ICPSHC24-30EU-IL-1': [features.brightness, features.light],
    'ICTC-G-1': [features.switch_sensor],
    L1527: [features.brightness, features.color_temperature, features.light],
    L1528: [features.brightness, features.color_temperature, features.light],
    L1529: [features.brightness, features.color_temperature, features.light],
    L1530: [features.brightness, features.color_temperature, features.light],
    L1531: [features.brightness, features.color_temperature, features.light],
    LED1536G5: [features.brightness, features.color_temperature, features.light],
    'LED1537R6/LED1739R5': [features.brightness, features.color_temperature, features.light],
    LED1545G12: [features.brightness, features.color_temperature, features.light],
    LED1546G12: [features.brightness, features.color_temperature, features.light],
    LED1622G12: [features.brightness, features.light],
    LED1623G12: [features.brightness, features.light],
    LED1624G9: [features.brightness, features.color, features.light],
    LED1649C5: [features.brightness, features.light],
    LED1650R5: [features.brightness, features.light],
    LED1732G11: [features.brightness, features.color_temperature, features.light],
    LED1733G7: [features.brightness, features.color_temperature, features.light],
    LED1736G9: [features.brightness, features.color_temperature, features.light],
    LED1738G7: [features.brightness, features.color_temperature, features.light],
    LED1836G9: [features.brightness, features.light],
    LED1837R5: [features.brightness, features.light],
    LED1842G3: [features.brightness, features.light],
    'LED1903C5/LED1835C6': [features.brightness, features.color_temperature, features.light],
    LED1923R5: [features.brightness, features.color, features.color_temperature, features.light],
    LED1924G9: [features.brightness, features.color, features.color_temperature, features.light],
    LED1925G6: [features.brightness, features.color, features.color_temperature, features.light],
    LED1934G3_E26: [features.brightness, features.light],
    LED1934G3_E27: [features.brightness, features.light],
    LED1935C3: [features.brightness, features.light],
    LED1936G5: [features.brightness, features.color_temperature, features.light],
    LED1937T5_E26: [features.brightness, features.color_temperature, features.light],
    LED1937T5_E27: [features.brightness, features.color_temperature, features.light],
    T1820: [features.brightness, features.color_temperature, features.light],
    T1828: [features.brightness, features.color_temperature, features.light],
    T1829: [features.brightness, features.color_temperature, features.light],
    T2011: [features.brightness, features.color_temperature, features.light],
  },
};

module.exports = {
  IKEA,
};
