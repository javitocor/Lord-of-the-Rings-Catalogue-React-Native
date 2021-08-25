const getKeys = (item) => {
  let keys = [];
  for(const k in item) keys.push(k);

  keys= keys.filter(value => {
      if (value === '_id'){
        return false;
    }
    return true;
  });
  return keys;
};

export default getKeys;