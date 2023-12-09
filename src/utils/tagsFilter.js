const tagsFilter = (tags) => {
  if (tags.includes('|')) {
    return { $in: tags.split('|') };
  }
  return { $all: tags.split(',') };
};

export default tagsFilter;
