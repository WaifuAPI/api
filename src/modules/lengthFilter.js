/**
 * Generates a MongoDB query object for filtering documents based on length range.
 *
 * @function lengthFilter
 * @param {number|string} minLength - Minimum length for the filter. (default: 0)
 * @param {number|string} maxLength - Maximum length for the filter. (default: 10000)
 *
 * @returns {Object} MongoDB query object.
 * @returns {number} $gte - Greater than or equal to the minimum length.
 * @returns {number} $lte - Less than or equal to the maximum length.
 */
const lengthFilter = (minLength, maxLength) => ({
  $gte: Number(minLength) || 0,
  $lte: Number(maxLength) || 1e4,
});

export default lengthFilter;
