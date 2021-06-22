/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { stringSelector } from '../../selectors';

export default function HomePage() {
  const strings = useSelector(stringSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_STRINGS' });
  }, []);

  return strings.length ? (
    strings.map(s => <p key={uuidv4()}>{s}</p>)
  ) : (
    <FontAwesomeIcon icon={faSpinner} spin />
  );
}
