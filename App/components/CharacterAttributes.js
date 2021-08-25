import React from 'react';
import {
  View,
  StyleSheet, 
  Dimensions,
  Text,
  TouchableOpacity,
  Alert,
  Linking
} from 'react-native';
import colors from '../constants/colors';

const openLink = (url) =>
  Linking.openURL(url).catch(() =>
    Alert.alert('Sorry, something went wrong.', 'Please try again later.')
  );

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
})

const CharacterAttributes = (props) => {
  const {item, character} = props;
  return (
    <View style={styles.list}>
      {item !== 'wikiUrl' ? 
      (
        <Text style={styles.textList}>
          {item}
          :
          {' '}
          {character[item]}
        </Text>
      ) : (
        <TouchableOpacity onPress={() =>
          openLink(character[item])
        }
        >
          <Text style={styles.textList}>
            Open in Wikipedia
          </Text>
        </TouchableOpacity>
      )
      }
    </View>

  );
}

export default CharacterAttributes;