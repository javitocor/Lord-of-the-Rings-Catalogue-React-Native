import {
  GET_SINGLE_BOOK, GET_SINGLE_BOOK_PENDING, GET_SINGLE_BOOK_ERROR,
  GET_ALL_BOOKS, GET_ALL_BOOKS_PENDING, GET_ALL_BOOKS_ERROR,
  GET_ALL_CHAPTERS, GET_ALL_CHAPTERS_PENDING, GET_ALL_CHAPTERS_ERROR,
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

export const getAllChapters = chapters => ({
  type: GET_ALL_CHAPTERS,
  chapters,
});

export const getAllChaptersPending = () => ({
  type: GET_ALL_CHAPTERS_PENDING,
});

export const getAllChaptersError = error => ({
  type: GET_ALL_CHAPTERS_ERROR,
  error,
});