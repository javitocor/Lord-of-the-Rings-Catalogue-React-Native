import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

import colors from '../constants/colors';
import displayCharacterImage from '../helpers/displayCharacterImage';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { 
    width: screen.width *0.43, 
    height: screen.height *0.25,
    marginHorizontal:5,
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginVertical: 3,
    marginHorizontal: 3,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  container2:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: screen.width * 0.30,
  },
});

const CharacterDisplay = ({ name, onButtonPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <View style={styles.container2}>
          <Image 
            source={displayCharacterImage(name)}
            style={styles.topicImage}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterDisplay;