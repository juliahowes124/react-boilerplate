/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function HomePage() {
  // const [strings, setStrings] = useState([]);
  const strings = useSelector(state => state.strings.strings);
  console.log('STRINGS', strings);

  // useEffect(() => {
  //   async function fetchStrings() {
  //     const results = await axios.get('/api');
  //     setStrings(results.data.strings);
  //   }
  //   fetchStrings();
  // }, []);

  return strings && strings.map(s => <p>{s}</p>);
}
