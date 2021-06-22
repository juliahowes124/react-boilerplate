/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stringSelector } from '../../selectors';

export default function HomePage() {
  const strings = useSelector(stringSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_STRINGS_ASYNC' });
  }, []);

  return strings && strings.map(s => <p>{s}</p>);
}
