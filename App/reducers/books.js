import {
  initialStateBooks,
  GET_SINGLE_BOOK, GET_SINGLE_BOOK_PENDING, GET_SINGLE_BOOK_ERROR,
  GET_ALL_BOOKS, GET_ALL_BOOKS_PENDING, GET_ALL_BOOKS_ERROR,
  GET_ALL_CHAPTERS, GET_ALL_CHAPTERS_PENDING, GET_ALL_CHAPTERS_ERROR,
} from '../constants/constants';

const bookReducer = (state = initialStateBooks, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        pending: false,
        booksList: action.booksList.docs,
      };
    case GET_ALL_BOOKS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_BOOKS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case GET_SINGLE_BOOK:
      return {
        ...state,
        pending: false,
        book: action.book,
      };
    case GET_SINGLE_BOOK_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_SINGLE_BOOK_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
      case GET_ALL_CHAPTERS:
        return {
          ...state,
          pending: false,
          chapters: action.chapters.docs,
        };
      case GET_ALL_CHAPTERS_PENDING:
        return {
          ...state,
          pending: true,
        };
      case GET_ALL_CHAPTERS_ERROR:
        return {
          ...state,
          pending: false,
          error: action.error,
        };
    default:
      return state;
  }
};

export default bookReducer;