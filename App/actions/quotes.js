import {
  GET_ALL_QUOTES, GET_ALL_QUOTES_PENDING, GET_ALL_QUOTES_ERROR,
} from '../constants/constants';

export const getAllQuotes = quotesList => ({
  type: GET_ALL_QUOTES,
  quotesList,
});

export const getAllQuotesPending = () => ({
  type: GET_ALL_QUOTES_PENDING,
});

export const getAllQuotesError = error => ({
  type: GET_ALL_QUOTES_ERROR,
  error,
});