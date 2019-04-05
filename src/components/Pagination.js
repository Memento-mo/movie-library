import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

import Button from './Button';

const ButtonsWrapped = styled.div`
  margin-top: 40px;
  display: flex;
`;

const ButtonNext = styled.div`
  position: relative;
  left: 85%;
`;

const ButtonPrev = styled.div`
  position: relative;
`;

const Pagination = ({ movies }) => {
  const {page, total_pages} = movies

  if (total_pages === 1 ) return null;

  if(page < total_pages && page === 1) {
    return(
      <ButtonsWrapped>
        <ButtonNext>
          <NavLink to={`${process.env.PUBLIC_URL}?page=${page + 1}`}>
            <Button title={`Страница ${page + 1}`} />
          </NavLink>
        </ButtonNext> 
      </ButtonsWrapped>
    )
  } else if (page < total_pages) {
    return (
      <ButtonsWrapped>
        <ButtonPrev>
          <NavLink to={`${process.env.PUBLIC_URL}?page=${page - 1}`}>
            <Button title={`Страница ${page - 1}`}/>
          </NavLink>
        </ButtonPrev> 

        <ButtonNext>
          <NavLink to={`${process.env.PUBLIC_URL}?page=${page + 1}`}>
            <Button title={`Страница ${page + 1}`}/>
          </NavLink>
        </ButtonNext>
      </ButtonsWrapped>
    )
  } else {
    return (
      <ButtonsWrapped>
        <ButtonPrev>
          <NavLink to={`${process.env.PUBLIC_URL}?page=${page - 1}`}>
            <Button title={`Страница ${page - 1}`} />
          </NavLink>
        </ButtonPrev>
      </ButtonsWrapped>
    )
  }
}

export default Pagination
