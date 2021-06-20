export const GET_STRINGS = 'GET_STRINGS';
export const ADD_STRING = 'ADD_STRING';

export function getStrings() {
  return {
    type: GET_STRINGS,
  };
}

export function addString(string) {
  return {
    type: ADD_STRING,
    string,
  };
}
