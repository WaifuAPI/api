/**
 * Parses the input tags and constructs a MongoDB filter for tag matching.
 *
 * @function tagsFilter
 * @param {string} tags - Input tags string separated by ',' or '|' (e.g., "tag1,tag2" or "tag1|tag2").
 *
 * @returns {Object|null} MongoDB filter for tag matching: { $all: ['tag1', 'tag2'] } or { $in: ['tag1', 'tag2'] }.
 * Returns null if the input is not a string.
 */
const tagsFilter = tags => {
  if (typeof tags === 'string') {
    if (tags.includes('|')) {
      return { $in: tags.split('|') };
    }
    return { $all: tags.split(',') };
  }

  return null;
};

export default tagsFilter;
