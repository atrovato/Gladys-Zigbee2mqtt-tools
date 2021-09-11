module.exports = (fileName, vendor, features) => {
  const parts = [];

  parts.push('const { features } = require(\'../utils/features\');');
  parts.push('');
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
  parts.push('  ' + fileName);
  parts.push('};');
  parts.push('');

  return parts.join('\n');
}