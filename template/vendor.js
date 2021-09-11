const featureTemplate = require("./feature");

module.exports = (fileName, vendor, models) => {
  const parts = [];

  let nbFeatures = 0;
  const features = models.sort((a, b) => a.model > b.model ? 1 : -1)
    .map(item => {
      nbFeatures += item.features.length;
      return featureTemplate(item.model, item.features);
    })
    .join('\n')

  if (nbFeatures) {
    parts.push('const { features } = require(\'../utils/features\');');
    parts.push('');
  }

  parts.push('/**');
  parts.push(' * ' + vendor + ' managed models.');
  parts.push(' */');
  parts.push('const ' + fileName + ' = {');
  parts.push('  brand: \'' + vendor + '\',');
  parts.push('  models: {');
  parts.push(features);
  parts.push('  },');
  parts.push('};');
  parts.push('');
  parts.push('module.exports = {');
  parts.push('  ' + fileName + ',');
  parts.push('};');
  parts.push('');

  return parts.join('\n');
}