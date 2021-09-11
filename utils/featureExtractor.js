const featureMap = require('./featureMap');

const featureExtractor = (device, unmappedFeatures = []) => {
  const { exposes } = device;

  return Array.from(new Set(exposes
    .flatMap(e => {
      const names = [];
      const name = e.name || e.type;

      const eFeatures = e.features || [];
      eFeatures.forEach(f => names.push(name + '_' + (f.name || f.type)));

      if (names.length === 0) {
        names.push(name);
      }

      return names;
    })
    .map(e => {
      const feature = featureMap[e];
      if (!feature) {
        unmappedFeatures.add(e);
      }
      return feature;
    })
    .filter(e => e !== undefined)));
};

module.exports = featureExtractor;