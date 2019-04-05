import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import RenderPropsMenu from './Menu';

const Wrapped = styled.div`
  display: flex;
  align-items: center;
`;

const Home = styled.div`
  font-weight: 600;
  margin-right: 10px;
  padding: 7px 8px;
  border-radius: 4px;
  position: relative;
  top: -1px;
  transition: 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);  
  }
`;

const Header = () => {
  return (
    <Wrapped>
      <Home>
        <NavLink to='/'>Главная</NavLink>
      </Home>
      <RenderPropsMenu />
    </Wrapped>
  )
}

export default Header
