module.exports = (model, features) => {
  const parts = [];

  parts.push('    ');
  if (features.length === 0) {
    parts.push('// ');
  }

  const containsSpecialChar = /[-\/\. ]|^\d/.test(model);

  if (containsSpecialChar) {
    parts.push('\'');
  }
  parts.push(model);
  if (containsSpecialChar) {
    parts.push('\'');
  }
  parts.push(': [');

  parts.push(features.map(feature => 'features.' + feature).sort().join(', '));

  parts.push('],');

  return parts.join('');
}