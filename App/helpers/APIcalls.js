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
    }    

    const response = await fetch(Url, { mode: 'cors', headers: {'Authorization': `Bearer ${Constants.manifest.extra.APITOKEN}`}});
    const data = await response.json();
    if(route==='book'){
      dispatch(fromBooks.getAllBooks(data));
    } else if (route==='movie') {
      dispatch(fromMovies.getAllMovies(data));
    } else if (route==='character'){
      dispatch(fromCharacters.getAllCharacters(data));
    }     
    return data;
  } catch (error) {
    if(route==='book'){
      dispatch(fromBooks.getAllBooksError(error));
    } else if (route==='movie') {
      dispatch(fromMovies.getAllMoviesError(error));
    } else if (route==='character'){
      dispatch(fromCharacters.getAllCharactersError(error));
    }    
  }
};

export const SingleCall = (id, route) => async dispatch => {
  const Url = `${BASE_URL + route}`;
  try {
    if(route==='book'){
      dispatch(fromBooks.getBookPending());
    } else if (route==='movie') {
      dispatch(fromMovies.getMoviePending());
    } else if (route==='character'){
      dispatch(fromCharacters.getCharacterPending());
    }

    const response = await fetch(`${Url}/${id}`, { mode: 'cors', headers: {'Authorization': `Bearer ${Constants.manifest.extra.APITOKEN}`}});
    const data = await response.json();
    if(route==='book'){
      dispatch(fromBooks.getBook(data.docs[0]));
    } else if (route==='movie') {
      dispatch(fromMovies.getMovie(data.docs[0]));
    } else if (route==='character'){
      dispatch(fromCharacters.getCharacter(data.docs[0]));
    }
    return data;
  } catch (error) {
    if(route==='book'){
      dispatch(fromBooks.getBookError(error));
    } else if (route==='movie') {
      dispatch(fromMovies.getMovieError(error));
    } else if (route==='character'){
      dispatch(fromCharacters.getCharacterError(error));
    }   
  }
};