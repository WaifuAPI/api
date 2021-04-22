module.exports = function lengthFilter(minLength, maxLength) {
  return {
    $gte: Number(minLength) || 0,
    $lte: Number(maxLength) || 1e4,
  }
}
