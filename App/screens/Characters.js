/* eslint-disable react/forbid-prop-types */
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CharacterDisplay from '../components/CharacterDisplay';
import {AllCall} from '../helpers/APIcalls';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  bgimage: {
    flex: 1,
    height: screen.height * 1,
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  waiting:{
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 100,
  },
});

const Characters = (props) => {
  const {navigation, getAllCharacters} = props;
  const {charactersList} = props.characters; 

  useEffect(() => {
    getAllCharacters('character');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />      
      <ImageBackground source={require('../assets/images/background3.jpg')} resizeMode="cover" style={styles.bgimage}>
        {props.characters.pending ? (
          <ActivityIndicator color={colors.white} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}>  
              <ScrollView>     
                <View style={styles.itemsContainer}>
                  {charactersList && charactersList.map(item =>{
                return (
                  <CharacterDisplay name={item.name} onButtonPress={() => navigation.navigate('CharacterDetail', {title:item.name, id: item._id})} />
              )})}
                </View>
              </ScrollView> 
            </View>
          )}
      </ImageBackground>
    </View>
  );
};

Characters.propTypes = {
  characters: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    charactersList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllCharacters: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  characters: {
    error: state.characters.error,
    charactersList: state.characters.charactersList,
    pending: state.characters.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllCharacters: AllCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Characters);