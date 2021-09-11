module.exports = (model, features) => {
  const parts = [];

  parts.push('    ');
  if (features.length === 0) {
    parts.push('// ');
  }

  parts.push('\'');
  parts.push(model);
  parts.push('\': [');

  parts.push(features.map(feature => 'features.' + feature).sort().join(', '));

  parts.push('],');

  return parts.join('');
}