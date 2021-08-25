import { combineReducers } from 'redux';
import bookReducer from './books';
import movieReducer from './movies';
import characterReducer from './characters';
import quoteReducer from './quotes';

const rootReducer = combineReducers({
  books: bookReducer,
  movies: movieReducer,
  characters: characterReducer,
  quotes: quoteReducer,
});

export default rootReducer;