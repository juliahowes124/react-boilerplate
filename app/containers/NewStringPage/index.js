/*
 * NewStringPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import axios from 'axios';

export default function NewStringPage() {
  const [formData, setFormData] = useState({ string: '' });

  async function handleSubmit(evt) {
    evt.preventDefault();
    const res = await axios.post('/api', formData);
    console.log(res);
    // TODO: REROUTE
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
