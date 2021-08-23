/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,  
  ActivityIndicator,
  ImageBackground,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookDisplay from '../components/BookDisplay'; 
import {AllCall} from '../helpers/APIcalls';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: colors.white,
    height: screen.height * 1,
  },
  bgimage: {
    flex: 1,
    height: screen.height * 1,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: screen.height*0.03
  },
  waiting:{
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 100,
  },
});

const Books = (props) => {
  const {navigation, getAllBooks} = props;
  const {booksList} = props.books; 

  useEffect(() => {
    getAllBooks('book');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />      
      <ImageBackground source={require('../assets/images/background5.jpg')} resizeMode="cover" style={styles.bgimage}>
        {props.books.pending ? (
          <ActivityIndicator color={colors.white} size="large" style={styles.waiting} />
          ):(
            <ScrollView>
              <View style={styles.content}>
                {booksList && booksList.map(item =>
                {return (              
                  <BookDisplay name={item.name} onButtonPress={() => navigation.navigate('BookDetail', {title:item.name, id: item._id})} />
                )})}
              </View>
            </ScrollView>
          )}
      </ImageBackground>
      
    </View>
  );
};

Books.propTypes = {
  books: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    booksList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllBooks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: {
    error: state.books.error,
    booksList: state.books.booksList,
    pending: state.books.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllBooks: AllCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Books);