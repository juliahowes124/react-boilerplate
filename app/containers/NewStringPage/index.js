/*
 * NewStringPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StyledTitle, StyledButton } from '../../styledComponents';

export default function NewStringPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({ string: '' });

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch({ type: 'ADD_STRING', string: formData.string });
    setFormData({ string: '' });
    history.push('/');
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledTitle bg="purple">Add a new string</StyledTitle>
      <div>
        <input
          name="string"
          id="string"
          aria-label="string"
          required
          placeholder="Enter a new string"
          value={formData.string}
          onChange={handleChange}
        />
        <StyledButton bg="purple">Submit</StyledButton>
      </div>
    </form>
  );
}
