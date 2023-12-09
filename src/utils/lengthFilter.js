const lengthFilter = (minLength, maxLength) => ({
  $gte: Number(minLength) || 0,
  $lte: Number(maxLength) || 1e4,
});

export default lengthFilter;
