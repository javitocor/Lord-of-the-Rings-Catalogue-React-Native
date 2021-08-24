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
import {SingleCall} from '../helpers/APIcalls';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  
});

const Books = (props) => {
  const {navigation, getSingleBook} = props;
  const {book} = props.books; 
  const {id} = props.roue.params;

  useEffect(() => {
    getSingleBook('book',);
  }, []);

  return (
    
  );
};

Books.propTypes = {
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
  getSingleBooks: SingleCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Books);