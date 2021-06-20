import { ADD_STRING } from './actions';

const DEFAULT_STATE = {
  strings: [],
};

export default function stringsReducer(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case ADD_STRING:
      return { ...state, strings: [action.string] };
    default:
      return state;
  }
}
