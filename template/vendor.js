const featureTemplate = require("./feature");

module.exports = (fileName, vendor, models) => {
  const parts = [];

  let nbFeatures = 0;
  const features = Object.keys(models).sort()
    .map(model => {
      const features = models[model];
      nbFeatures += features.length;
      return featureTemplate(model, features);
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