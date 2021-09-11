/**
 * @description Transform a string to a valid slug (useful for selector)
 * @param {string} str - The string to transform.
 * @returns {string} Return the slug.
 * @example
 * slugify('Living room light');
 */
function slugify(str) {
  let newString = str;

  // Capitalize first letter
  let words = newString.split(" ");

  newString = words.map((word) => {
    let lcWord = word.toLowerCase();
    return lcWord.charAt(0).toUpperCase() + lcWord.slice(1);
  }).join('');

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';
  for (let i = 0, l = from.length; i < l; i += 1) {
    newString = newString.replace(new RegExp(from.charAt(i), 'ig'), to.charAt(i));
  }

  newString = newString.replace(/[^A-Za-z0-9]/g, ''); // remove invalid chars

  return newString;
}

module.exports = {
  slugify,
};
