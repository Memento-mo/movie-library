import React from 'react'
import styled from 'styled-components';


const ButtonWrapped = styled.button`
  border: 1px solid transparent;
  padding: 10px 23px;
  outline: none;
  background: black;
  color: ${props => props.theme.colors.text};
  transition: 0.2s ease;
  cursor: pointer;
  border-radius: 15px;

  &:hover {
    background: ${props => props.theme.colors.text};
    border: 1px solid black;
    color: black;
  }
`;

const Button = ({title, page, func}) => {
  return (
    <ButtonWrapped
      onClick={func}
      > { title } </ButtonWrapped>
  )
}

export default Button
