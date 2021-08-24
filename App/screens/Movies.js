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
import MovieDisplay from '../components/MovieDisplay';
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

const Movies = (props) => {
  const {navigation, getAllMovies} = props;
  const {moviesList} = props.movies; 

  useEffect(() => {
    getAllMovies('movie');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      
      <ImageBackground source={require('../assets/images/background2.jpg')} resizeMode="cover" style={styles.bgimage}>
        {props.movies.pending ? (
          <ActivityIndicator color={colors.white} size="large" style={styles.waiting} />
          ):(            
            <View style={styles.content}>   
              <ScrollView>    
                <View style={styles.itemsContainer}>
                  {moviesList && moviesList.map(item =>{
                return (
                  <MovieDisplay name={item.name} onButtonPress={() => navigation.navigate('MovieDetail', {title:item.name, id: item._id})} />
              )})}
                </View>
              </ScrollView>
            </View>            
          )}
      </ImageBackground>
    </View>
  );
};

Movies.propTypes = {
  movies: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    moviesList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllMovies: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movies: {
    error: state.movies.error,
    moviesList: state.movies.moviesList,
    pending: state.movies.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllMovies: AllCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Movies);