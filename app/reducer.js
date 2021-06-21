import { SET_STRINGS } from './actions';

const DEFAULT_STATE = {
  strings: [],
};

export default function stringsReducer(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case SET_STRINGS:
      return { strings: action.strings };
    default:
      return state;
  }
}
