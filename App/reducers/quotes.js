import {
  initialStateQuotes,
  GET_ALL_QUOTES, GET_ALL_QUOTES_PENDING, GET_ALL_QUOTES_ERROR,
} from '../constants/constants';

const quoteReducer = (state = initialStateQuotes, action) => {
  switch (action.type) {
    case GET_ALL_QUOTES:
      return {
        ...state,
        pending: false,
        quotesList: action.quotesList.docs,
      };
    case GET_ALL_QUOTES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_QUOTES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };    
    default:
      return state;
  }
};

export default quoteReducer;