import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: ${props => props.bg};
`;

export const StyledButton = styled.button`
  background-color: ${props => props.bg};
  color: white;
  border: 2px solid ${props => props.bg};
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-left: 0.5rem;
  &:hover {
    background-color: white;
    color: ${props => props.bg};
  }
`;
