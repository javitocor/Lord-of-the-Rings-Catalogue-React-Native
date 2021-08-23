import {
  GET_SINGLE_MOVIE, GET_SINGLE_MOVIE_PENDING, GET_SINGLE_MOVIE_ERROR,
  GET_ALL_MOVIES, GET_ALL_MOVIES_PENDING, GET_ALL_MOVIES_ERROR,
} from '../constants/constants';

export const getAllMovies = moviesList => ({
  type: GET_ALL_MOVIES,
  moviesList,
});

export const getAllMoviesPending = () => ({
  type: GET_ALL_MOVIES_PENDING,
});

export const getAllMoviesError = error => ({
  type: GET_ALL_MOVIES_ERROR,
  error,
});

export const getSingleMovie = movie => ({
  type: GET_SINGLE_MOVIE,
  movie,
});

export const getSingleMoviePending = () => ({
  type: GET_SINGLE_MOVIE_PENDING,
});

export const getSingleMovieError = error => ({
  type: GET_SINGLE_MOVIE_ERROR,
  error,
});