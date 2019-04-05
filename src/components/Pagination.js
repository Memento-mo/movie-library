import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

import Button from './Button';

const ButtonsWrapped = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: ${props => 
      props.type === 'both' ? 'space-between' 
    : props.type === 'last' ? 'flex-start' 
    : 'flex-end'}
`;

const Pagination = ({ movies }) => {
  const {page, total_pages} = movies

  if (total_pages === 1 ) return null;

  if(page < total_pages && page === 1) {
    return(
      <ButtonsWrapped>
          <NavLink to={`${process.env.PUBLIC_URL}?page=${page + 1}`}>
            <Button title={`Страница ${page + 1}`} />
          </NavLink>
      </ButtonsWrapped>
    )
  } else if (page < total_pages) {
    return (
      <ButtonsWrapped type="both">
          <NavLink to={`${process.env.PUBLIC_URL}?page=${page - 1}`}>
            <Button title={`Страница ${page - 1}`}/>
          </NavLink>

          <NavLink to={`${process.env.PUBLIC_URL}?page=${page + 1}`}>
            <Button title={`Страница ${page + 1}`}/>
          </NavLink>
      </ButtonsWrapped>
    )
  } else {
    return (
      <ButtonsWrapped type="last">
          <NavLink to={`${process.env.PUBLIC_URL}?page=${page - 1}`}>
            <Button title={`Страница ${page - 1}`} />
          </NavLink>
      </ButtonsWrapped>
    )
  }
}

export default Pagination
