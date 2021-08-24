/* eslint-disable consistent-return */
function displayMovieImage(name) {
  if (name === 'The Unexpected Journey'){
    return require("../assets/images/movies/journey.jpg");
  } if (name === 'The Desolation of Smaug') {
    return require("../assets/images/movies/smaug.jpg");
  } if (name === 'The Battle of the Five Armies') {
    return require("../assets/images/movies/battle.jpg");
  }  if (name === 'The Two Towers ') {
    return require("../assets/images/movies/towers-movie.jpg");
  }  if (name === 'The Fellowship of the Ring') {
    return require("../assets/images/movies/fellowship-movie.jpg");
  }  if (name === 'The Return of the King') {
    return require("../assets/images/movies/king-movie.jpg");
  } if (name === 'The Lord of the Rings Series') {
    return require("../assets/images/movies/series.jpg");
  } if (name === 'The Hobbit Series') {
    return require("../assets/images/movies/hobbit-series.jpg");
  }     
    return require('../assets/images/noimage.png');     
};

export default displayMovieImage;