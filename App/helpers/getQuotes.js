/* eslint-disable no-sequences */
function getQuotes(object, section, id) {
  const filtered = object.reduce((a, o) => (o[section] === id && a.push(o.dialog), a), []);  

  const random = Math.floor(Math.random() * filtered.length);

  return filtered[random];
}

export default getQuotes;