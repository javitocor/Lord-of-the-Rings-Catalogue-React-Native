/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import {
  View,
  StyleSheet, 
  ActivityIndicator,
  ImageBackground,
  Dimensions,
  Text,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {SingleCall} from '../helpers/APIcalls';
import displayBookImage from '../helpers/displayBookImage';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.white,
    height: screen.height * 1,
    marginTop: screen.height*0.1
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 20
  },
  text: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});

const BookDetail = (props) => {
  const {getSingleBook} = props;
  const {book} = props.books; 
  const {id} = props.route.params;

  useEffect(() => {
    getSingleBook('book', id);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background5.jpg')} resizeMode="cover" style={styles.bgimage}>
        {props.books.pending ? (
          <ActivityIndicator color={colors.white} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}>
              <Text style={styles.text}>{book.name}</Text>
              <Image source={displayBookImage(book.name)} resizeMode="contain" style={styles.image} />
            </View>
          )}
      </ImageBackground>
    </View>    
  );
};

BookDetail.propTypes = {
  books: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    book: PropTypes.object,
  }).isRequired,
  getSingleBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: {
    error: state.books.error,
    book: state.books.book,
    pending: state.books.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSingleBook: SingleCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);