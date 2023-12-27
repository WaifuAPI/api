const tagsFilter = (tags) => {
  if (typeof tags === 'string') {
    if (tags.includes('|')) {
      return { $in: tags.split('|') };
    }
    return { $all: tags.split(',') };
  }
};

export default tagsFilter;
