/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [strings, setStrings] = useState([]);

  useEffect(() => {
    async function fetchStrings() {
      const results = await axios.get('/api');
      setStrings(results.data.strings);
    }
    fetchStrings();
  }, []);

  return strings && strings.map(s => <p>{s}</p>);
}
