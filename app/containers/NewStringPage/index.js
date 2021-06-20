/*
 * NewStringPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function NewStringPage() {
  const dispatch = useDispatch();
  const strings = useSelector(state => state.strings.strings);
  console.log('STRINGS', strings);

  const [formData, setFormData] = useState({ string: '' });

  // async function handleSubmit(evt) {
  //   evt.preventDefault();
  //   const res = await axios.post('/api', formData);
  //   console.log(res);
  //   // TODO: REROUTE
  // }

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch({ type: 'ADD_STRING', string: formData.string });
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="string" value={formData.string} onChange={handleChange} />
    </form>
  );
}
