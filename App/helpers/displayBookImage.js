/* eslint-disable consistent-return */
function displayBookImage(name) {
  if (name === 'The Fellowship Of The Ring'){
    return require("../assets/images/books/fellowship.jpg");
  } if (name === 'The Two Towers') {
    return require("../assets/images/books/towers.jpg");
  } if (name === 'The Return Of The King') {
    return require("../assets/images/books/king.jpg");
  }  
    return require('../assets/images/noimage.png');     
};

export default displayBookImage;