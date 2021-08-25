export const BASE_URL = 'https://the-one-api.dev/v2/';

export const initialStateBooks = {
  error: null,
  pending: false,
  booksList: [],
  book: {},
  chapters: [],
};

export const GET_SINGLE_BOOK = 'GET_SINGLE_BOOK';
export const GET_SINGLE_BOOK_PENDING = 'GET_SINGLE_BOOK_PENDING';
export const GET_SINGLE_BOOK_ERROR = 'GET_SINGLE_BOOK_ERROR';
export const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
export const GET_ALL_BOOKS_PENDING = 'GET_ALL_BOOKS_PENDING';
export const GET_ALL_BOOKS_ERROR = 'GET_ALL_BOOKS_ERROR';
export const GET_ALL_CHAPTERS = 'GET_ALL_CHAPTERS';
export const GET_ALL_CHAPTERS_PENDING = 'GET_ALL_CHAPTERS_PENDING';
export const GET_ALL_CHAPTERS_ERROR = 'GET_ALL_CHAPTERS_ERROR';

export const initialStateMovies = {
  error: null,
  pending: false,
  moviesList: [],
  movie: {},
};

export const GET_SINGLE_MOVIE = 'GET_SINGLE_MOVIE';
export const GET_SINGLE_MOVIE_PENDING = 'GET_SINGLE_MOVIE_PENDING';
export const GET_SINGLE_MOVIE_ERROR = 'GET_SINGLE_MOVIE_ERROR';
export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
export const GET_ALL_MOVIES_PENDING = 'GET_ALL_MOVIES_PENDING';
export const GET_ALL_MOVIES_ERROR = 'GET_ALL_MOVIES_ERROR';

export const initialStateCharacters = {
  error: null,
  pending: false,
  charactersList: [],
  character: {},
};

export const GET_SINGLE_CHARACTER = 'GET_SINGLE_CHARACTER';
export const GET_SINGLE_CHARACTER_PENDING = 'GET_SINGLE_CHARACTER_PENDING';
export const GET_SINGLE_CHARACTER_ERROR = 'GET_SINGLE_CHARACTER_ERROR';
export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_ALL_CHARACTERS_PENDING = 'GET_ALL_CHARACTERS_PENDING';
export const GET_ALL_CHARACTERS_ERROR = 'GET_ALL_CHARACTERS_ERROR';

export const initialStateQuotes = {
  error: null,
  pending: false,
  quotesList: [],
};

export const GET_ALL_QUOTES = 'GET_ALL_QUOTES';
export const GET_ALL_QUOTES_PENDING = 'GET_ALL_QUOTES_PENDING';
export const GET_ALL_QUOTES_ERROR = 'GET_ALL_QUOTES_ERROR';

