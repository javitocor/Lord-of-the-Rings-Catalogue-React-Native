/* eslint-disable no-unused-vars */
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
  FlatList,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {SingleCall, AllCall} from '../helpers/APIcalls';
import displayBookImage from '../helpers/displayBookImage';
import BookChapters from '../components/BookChapters';
import getChapters from '../helpers/getChapters';

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
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 2
  },
  text: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    flex:1,
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 10
  },
  flatContainer:{
    height: screen.height * 0.2
  },
  chapterText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    textDecorationLine: 'underline',
    textDecorationColor: colors.yellow,
  },
});

const BookDetail = (props) => {
  const {getSingleBook, getAllChapters} = props;
  const {book} = props.books; 
  const {id} = props.route.params;
  const [selectedChapters, setSelectedChapters]= useState([]);

  useEffect(() => {
    (async () => {
      try {
       const data = await getSingleBook('book', id);
       const dataChapters = await getAllChapters('chapter');
       const selected = await getChapters(dataChapters.docs, id);
       setSelectedChapters(selected);
      } catch (error) {
        console.log(error)
      }           
    })();  
  },[]);
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={require('../assets/images/background5.jpg')} resizeMode="cover" style={styles.bgimage}>
          {props.books.pending ? (
            <ActivityIndicator color={colors.white} size="large" style={styles.waiting} />
          ):(
            <View style={styles.content}>
              <Text style={styles.text}>{book.name}</Text>
              <Image source={displayBookImage(book.name)} resizeMode="contain" style={styles.image} />
              <View style={styles.flatContainer}>
                <Text style={styles.chapterText}>Chapters</Text>
                <FlatList                
                  data={selectedChapters}
                  renderItem={({ item }) => (<BookChapters key={item} item={item} />)}
                  style={{
                    flexGrow: 0,
                    height: 30
                  }}
                />
              </View>
            </View>
          )}
        </ImageBackground>
      </ScrollView>
    </View>    
  );
};

BookDetail.propTypes = {
  books: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    book: PropTypes.object,
    chapters: PropTypes.array
  }).isRequired,
  getSingleBook: PropTypes.func.isRequired,
  getAllChapters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  books: {
    error: state.books.error,
    book: state.books.book,
    pending: state.books.pending,
    chapters: state.books.chapters
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSingleBook: SingleCall,
  getAllChapters: AllCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);