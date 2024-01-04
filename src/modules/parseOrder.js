/**
 * Parses the input order keyword into a numeric value for MongoDB sorting.
 *
 * @function parseOrder
 * @param {string|number} input - Input order keyword. Supported values: "asc", "ascending", "desc", "descending", 1, -1.
 *
 * @returns {number|null} Numeric value for MongoDB sorting: 1 for ascending, -1 for descending, or null if the input is invalid.
 */
const parseOrder = input => {
  let value = input;

  // If value is one of the supported keywords ("asc", "ascending",
  // "desc", "descending"), convert it to the corresponding numeric value.
  if (/^asc(ending)?$|^desc(ending)?$/.test(String(value))) {
    value = /^asc/.test(input) ? 1 : -1;
  }

  return Math.abs(value) === 1 ? Number(value) : null;
};

export default parseOrder;
