import {
  initialStateMovies,
  GET_SINGLE_MOVIE, GET_SINGLE_MOVIE_PENDING, GET_SINGLE_MOVIE_ERROR,
  GET_ALL_MOVIES, GET_ALL_MOVIES_PENDING, GET_ALL_MOVIES_ERROR,
} from '../constants/constants';

const movieReducer = (state = initialStateMovies, action) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        pending: false,
        moviesList: action.moviesList.docs,
      };
    case GET_ALL_MOVIES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_MOVIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case GET_SINGLE_MOVIE:
      return {
        ...state,
        pending: false,
        movie: action.movie,
      };
    case GET_SINGLE_MOVIE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_SINGLE_MOVIE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default movieReducer;