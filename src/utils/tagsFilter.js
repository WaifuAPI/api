module.exports = function tagsFilter(tags) {
  if (tags.includes('|')) {
    return { $in: tags.split('|') }
  }
  return { $all: tags.split(',') }
}
