import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import displayBookImage from '../helpers/displayBookImage';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: screen.width * 0.8,
    height: screen.height * 0.4,
  },
  text: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 15
  },
  container:{
    marginVertical: 50
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

const BookDisplay =(props)=>{
  const {name, onButtonPress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <View style={styles.content}>
          <Image style={styles.image} source={displayBookImage(name)} resizeMode='contain' />
          <Text style={styles.text}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BookDisplay;