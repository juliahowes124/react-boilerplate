import { createSelector } from 'reselect';

export const stringSelector = createSelector(
  state => state.strings.strings,
  strings => strings,
);
