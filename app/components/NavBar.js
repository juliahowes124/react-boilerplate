import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.div`
  background-color: lightgray;
  display: flex;
  padding: 1rem;
  width: 100%;
`;

export default function NavBar() {
  return (
    <StyledNavBar>
      <NavLink to="/" style={{ margin: '.5rem' }}>
        Home
      </NavLink>
      <NavLink to="/new" style={{ margin: '.5rem' }}>
        New
      </NavLink>
    </StyledNavBar>
  );
}
