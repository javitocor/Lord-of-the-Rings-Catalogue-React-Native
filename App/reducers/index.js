import { combineReducers } from 'redux';
import bookReducer from './books';
import movieReducer from './movies';
import characterReducer from './characters';

const rootReducer = combineReducers({
  books: bookReducer,
  movies: movieReducer,
  characters: characterReducer,
});

export default rootReducer;