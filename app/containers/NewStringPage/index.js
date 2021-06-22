/*
 * NewStringPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.bg};
  color: white;
  border: 2px solid darkgreen;
`;

export default function NewStringPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ string: '' });

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch({ type: 'ADD_STRING_ASYNC', string: formData.string });
    setFormData({ string: '' });
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="string" value={formData.string} onChange={handleChange} />
      <StyledButton bg="red">Add</StyledButton>
    </form>
  );
}
