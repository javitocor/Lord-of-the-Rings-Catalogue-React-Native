/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet, 
  ActivityIndicator,
  ImageBackground,
  Dimensions,
  Text,
  Image,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CharacterAttributes from '../components/CharacterAttributes';
import {SingleCall} from '../helpers/APIcalls';
import displayCharacterImage from '../helpers/displayCharacterImage';
import getKeys from '../helpers/getKeys';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.white,
  },
  bgimage: {
    flex: 1,
    height: screen.height * 1,
  },
  waiting: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 100,
  },
  content: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'flex-start',
    marginTop: screen.height*0.1
  },
  text: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 22,
    textAlign: 'center',
  },
  image: {
    width: '75%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 25
  },
});

const CharacterDetail = (props) => {
  const {getSingleCharacter} = props;
  const {character} = props.characters; 
  const {id} = props.route.params;
  const [keys,setKeys] = useState([]);

  useEffect(() => {
    (async () => {
      try {
       const data = await getSingleCharacter('character', id);
       setKeys(getKeys(data.docs[0]));
      } catch (error) {
        console.log(error)
      }           
    })();  
  },[]);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background3.jpg')} resizeMode="cover" style={styles.bgimage}>
        {props.characters.pending ? (
          <ActivityIndicator color={colors.white} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}>
              <Text style={styles.text}>{character.name}</Text>
              <Image source={displayCharacterImage(character.name)} resizeMode="cover" style={styles.image} />
              <FlatList                
                data={keys}
                renderItem={({ item }) => (<CharacterAttributes key={item} item={item} character={character} />)}
              />
            </View>
          )}
      </ImageBackground>
    </View>    
  );
};

CharacterDetail.propTypes = {
  characters: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    character: PropTypes.object,
  }).isRequired,
  getSingleCharacter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  characters: {
    error: state.characters.error,
    character: state.characters.character,
    pending: state.characters.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSingleCharacter: SingleCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);