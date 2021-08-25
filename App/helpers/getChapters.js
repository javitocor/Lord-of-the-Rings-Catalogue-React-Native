function getChapters(chapters, id) {
  const values = chapters.map(item => item[id]);

  return values;
}

export default getChapters;