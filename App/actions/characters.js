import {
  GET_SINGLE_CHARACTER, GET_SINGLE_CHARACTER_PENDING, GET_SINGLE_CHARACTER_ERROR,
  GET_ALL_CHARACTERS, GET_ALL_CHARACTERS_PENDING, GET_ALL_CHARACTERS_ERROR,
} from '../constants/constants';

export const getAllCharacters = charactersList => ({
  type: GET_ALL_CHARACTERS,
  charactersList,
});

export const getAllCharactersPending = () => ({
  type: GET_ALL_CHARACTERS_PENDING,
});

export const getAllCharactersError = error => ({
  type: GET_ALL_CHARACTERS_ERROR,
  error,
});

export const getSingleCharacter = character => ({
  type: GET_SINGLE_CHARACTER,
  character,
});

export const getSingleCharacterPending = () => ({
  type: GET_SINGLE_CHARACTER_PENDING,
});

export const getSingleCharacterError = error => ({
  type: GET_SINGLE_CHARACTER_ERROR,
  error,
});