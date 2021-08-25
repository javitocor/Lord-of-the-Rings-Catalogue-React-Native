/* eslint-disable react/forbid-prop-types */
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
import MovieAttributes from '../components/MovieAttributes';
import {SingleCall} from '../helpers/APIcalls';
import displayMovieImage from '../helpers/displayMovieImage';
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

const MovieDetail = (props) => {
  const {getSingleMovie} = props;
  const {movie} = props.movies; 
  const {id} = props.route.params;
  const [keys,setKeys] = useState([]);

  useEffect(() => {
    (async () => {
      try {
       const data = await getSingleMovie('movie', id);
       setKeys(getKeys(data.docs[0]));
      } catch (error) {
        console.log(error)
      }           
    })();  
  },[]);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background2.jpg')} resizeMode="cover" style={styles.bgimage}>
        {props.movies.pending ? (
          <ActivityIndicator color={colors.white} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}>
              <Text style={styles.text}>{movie.name}</Text>
              <Image source={displayMovieImage(movie.name)} resizeMode="cover" style={styles.image} />
              <FlatList                
                data={keys}
                renderItem={({ item }) => (<MovieAttributes key={item} item={item} movie={movie} />)}
              />
            </View>
          )}
      </ImageBackground>
    </View>    
  );
};

MovieDetail.propTypes = {
  movies: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    movie: PropTypes.object,
  }).isRequired,
  getSingleMovie: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movies: {
    error: state.movies.error,
    movie: state.movies.movie,
    pending: state.movies.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSingleMovie: SingleCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);