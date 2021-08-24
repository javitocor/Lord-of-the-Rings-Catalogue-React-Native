/* eslint-disable consistent-return */
function displayCharacterImage(name) {
  if (name === 'Aragorn II Elessar'){
    return require("../assets/images/characters/aragorn.jpg");
  } if (name === 'Arwen') {
    return require("../assets/images/characters/arwen.jpg");
  } if (name === 'Bilbo Baggins') {
    return require("../assets/images/characters/bilbo.jpg");
  }  if (name === 'Frodo Baggins') {
    return require("../assets/images/characters/frodo.jpg");
  }  if (name === 'Gandalf') {
    return require("../assets/images/characters/gandalf.jpg");
  }  if (name === 'Gimli') {
    return require("../assets/images/characters/gimli.jpg");
  } if (name === 'Legolas') {
    return require("../assets/images/characters/legolas.jpg");
  } if (name === 'Samwise Gamgee') {
    return require("../assets/images/characters/sam.jpg");
  } if (name === 'Saruman') {
    return require("../assets/images/characters/saruman.jpg");
  }     
    return require('../assets/images/noimage.png');     
};

export default displayCharacterImage;