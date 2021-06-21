export const GET_STRINGS = 'GET_STRINGS';
export const SET_STRINGS = 'SET_STRINGS';

export function getStrings() {
  return {
    type: GET_STRINGS,
  };
}

export function setStrings(strings) {
  return {
    type: SET_STRINGS,
    strings,
  };
}
