/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
} from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: screen.width*1,
    height:screen.height*0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bgimage:{
    top: 0,
    position: 'absolute',
    width: screen.width,
    backgroundColor: '#f8f8f8',
    borderColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
  },
  headerTextTop:{
    textAlign: 'center',
    color: colors.yellow,
    fontSize: 8,
  },
  headerTextBottom: {
    textAlign: 'center',
    color: colors.yellow,
    fontSize: 13,
    fontWeight: 'bold',
  },
  back:{
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: screen.width*0.2,
    paddingLeft: 5,
  },
  center:{
    width: screen.width*0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    width: screen.width*0.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});


function HeaderCharacters(props) {
  return (
    <ImageBackground source={require('../assets/images/background7.jpg')} resizeMode="cover" style={styles.bgimage}>
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Entypo name="chevron-left" size={28} color={colors.yellow} />
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <Text style={styles.headerTextTop}>
            The Lord Of The Rings
          </Text>
          <Text style={styles.headerTextBottom}>{!props.route.params ? 'CHARACTERS' : props.route.params.title.toUpperCase()}</Text>
        </View>
        <View style={styles.right} />
      </View>
    </ImageBackground>
  );
};

HeaderCharacters.propTypes = {
  characters: PropTypes.shape({
    character: PropTypes.object,
  }).isRequired
};

const mapStateToProps = state => ({
  characters: {
    character: state.characters.character,
  }
});

export default connect(mapStateToProps)(HeaderCharacters);