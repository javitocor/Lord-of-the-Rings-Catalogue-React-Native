/* eslint-disable consistent-return */
import 'regenerator-runtime/runtime';
import Constants from "expo-constants";
import { BASE_URL } from '../constants/constants';
import * as fromBooks from '../actions/books';
import * as fromMovies from '../actions/movies';
import * as fromCharacters from '../actions/characters';

export const AllCall = (route) => async dispatch => {
  const Url = `${BASE_URL + route}`;
  
  try {
    if(route==='book'){
      dispatch(fromBooks.getAllBooksPending());
    } else if (route==='movie') {
      dispatch(fromMovies.getAllMoviesPending());
    } else if (route==='character'){
      dispatch(fromCharacters.getAllCharactersPending());
    } else if (route==='chapter'){
      dispatch(fromBooks.getAllChaptersPending());
    }        

    const response = await fetch(Url, { mode: 'cors', headers: {'Authorization': `Bearer ${Constants.manifest.extra.APITOKEN}`}});
    const data = await response.json();
    if(route==='book'){
      dispatch(fromBooks.getAllBooks(data));
    } else if (route==='movie') {
      dispatch(fromMovies.getAllMovies(data));
    } else if (route==='character'){
      dispatch(fromCharacters.getAllCharacters(data));
    } else if (route==='chapter'){
      dispatch(fromBooks.getAllChapters(data));
    }     
    return data;
  } catch (error) {
    if(route==='book'){
      dispatch(fromBooks.getAllBooksError(error));
    } else if (route==='movie') {
      dispatch(fromMovies.getAllMoviesError(error));
    } else if (route==='character'){
      dispatch(fromCharacters.getAllCharactersError(error));
    } else if (route==='chapter'){
      dispatch(fromBooks.getAllChaptersError(error));
    }    
  }
};

export const SingleCall = (route, id) => async dispatch => {
  const Url = `${BASE_URL + route}`;
  try {
    if(route==='book'){
      dispatch(fromBooks.getSingleBookPending());
    } else if (route==='movie') {
      dispatch(fromMovies.getSingleMoviePending());
    } else if (route==='character'){
      dispatch(fromCharacters.getSingleCharacterPending());
    }

    const response = await fetch(`${Url}/${id}`, { mode: 'cors', headers: {'Authorization': `Bearer ${Constants.manifest.extra.APITOKEN}`}});
    const data = await response.json();
    if(route==='book'){
      dispatch(fromBooks.getSingleBook(data.docs[0]));
    } else if (route==='movie') {
      dispatch(fromMovies.getSingleMovie(data.docs[0]));
    } else if (route==='character'){
      dispatch(fromCharacters.getSingleCharacter(data.docs[0]));
    }
    return data;
  } catch (error) {
    if(route==='book'){
      dispatch(fromBooks.getSingleBookError(error));
    } else if (route==='movie') {
      dispatch(fromMovies.getSingleMovieError(error));
    } else if (route==='character'){
      dispatch(fromCharacters.getSingleCharacterError(error));
    }   
  }
};