import React from 'react';
import {
  View,
  StyleSheet, 
  Dimensions,
  Text,
} from 'react-native';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  textList:{
    color: colors.text,
    fontSize: 16,
  },
  list: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    width: screen.width * 0.8,
    marginBottom: 10,
  },
});

const MovieAttributes = (props) => {
  return(
    <View style={styles.list}>
      <Text style={styles.textList}>
        {props.item}
        :
        {' '}
        {props.movie[props.item]}
      </Text>
    </View>
  )
};

export default MovieAttributes;