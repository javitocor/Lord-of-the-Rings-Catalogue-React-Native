/* eslint-disable no-sequences */
function getChapters(object, id) {
  const filtered = object.reduce((a, o) => (o.book === id && a.push(o.chapterName), a), []);    

  return filtered;
}

export default getChapters;