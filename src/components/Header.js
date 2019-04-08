import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import RenderPropsMenu from './Menu';
// import StickyBox from 'react-sticky-box';

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

  @media ${props => props.theme.mediaQueries.minMobile} {
    font-size: 12px;
    margin-right: 5px;
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
