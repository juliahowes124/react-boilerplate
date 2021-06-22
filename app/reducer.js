import { GET_STRINGS_ASYNC, ADD_STRING_ASYNC } from './actions';

const DEFAULT_STATE = {
  strings: [],
};

export default function stringsReducer(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case GET_STRINGS_ASYNC:
      return { strings: action.strings };
    case ADD_STRING_ASYNC:
      return { strings: action.strings };
    default:
      return state;
  }
}
