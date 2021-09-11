/**
 * @description Transform a string to a valid slug (useful for selector)
 * @param {string} str - The string to transform.
 * @returns {string} Return the slug.
 * @example
 * slugify('Living room light');
 */
function slugify(str) {
  let newString = str;

  // Capitalize first letters
  newString = newString.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';
  for (let i = 0, l = from.length; i < l; i += 1) {
    newString = newString.replace(new RegExp(from.charAt(i), 'gi'), to.charAt(i));
  }

  newString = newString.replace(/[^a-z0-9]/gi, ''); // remove invalid chars

  return newString;
}

module.exports = {
  slugify,
};
