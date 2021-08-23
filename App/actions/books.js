import {
  GET_SINGLE_BOOK, GET_SINGLE_BOOK_PENDING, GET_SINGLE_BOOK_ERROR,
  GET_ALL_BOOKS, GET_ALL_BOOKS_PENDING, GET_ALL_BOOKS_ERROR,
} from '../constants/constants';

export const getAllBooks = booksList => ({
  type: GET_ALL_BOOKS,
  booksList,
});

export const getAllBooksPending = () => ({
  type: GET_ALL_BOOKS_PENDING,
});

export const getAllBooksError = error => ({
  type: GET_ALL_BOOKS_ERROR,
  error,
});

export const getSingleBook = book => ({
  type: GET_SINGLE_BOOK,
  book,
});

export const getSingleBookPending = () => ({
  type: GET_SINGLE_BOOK_PENDING,
});

export const getSingleBookError = error => ({
  type: GET_SINGLE_BOOK_ERROR,
  error,
});