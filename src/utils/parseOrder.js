module.exports = function parseOrder(input) {
  let value = input
  // If value is one of the supported keywords ("asc", "ascending",
  // "desc", "descending"), convert it to the corresponding numeric value.
  if (/^asc(ending)?$|^desc(ending)?$/.test(String(value))) {
    value = /^asc/.test(input) ? 1 : -1
  }
  return Math.abs(value) === 1 ? Number(value) : null
}
