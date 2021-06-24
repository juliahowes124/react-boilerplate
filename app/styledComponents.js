import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: ${props => props.bg};
`;

export const StyledButton = styled.button`
  background-color: ${props => props.bg};
  border: 2px solid ${props => props.bg};
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  margin-left: 0.5rem;
  padding: 0.5rem;
  &:hover {
    background-color: white;
    color: ${props => props.bg};
  }
`;

export const StyledNavBar = styled.div`
  background-color: lightgray;
  display: flex;
  padding: 1rem;
  width: 100%;
`;
