module.exports = (models) => {
  const parts = [];

  parts.push('const models = [];');
  models.forEach(model => parts.push('models.push(require(\'./' + model + '\').' + model + ');'));
  parts.push('');
  parts.push('module.exports = models;');
  parts.push('');

  return parts.join('\n');
}