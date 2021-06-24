import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavBar } from '../styledComponents';

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
