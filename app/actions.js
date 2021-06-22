export const GET_STRINGS_ASYNC = 'GET_STRINGS_ASYNC';
export const SET_STRINGS = 'SET_STRINGS';

export function getStrings() {
  return {
    type: GET_STRINGS_ASYNC,
  };
}

export function setStrings(strings) {
  return {
    type: SET_STRINGS,
    strings,
  };
}
