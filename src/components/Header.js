import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
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

  @media ${props => props.theme.mediaQueries.minMobile} {
    font-size: 12px;
    margin-right: 5px;
  }
`;

const Header = ({ movies, tv }) => {
  return (
    <Wrapped>
      <Home>
        <NavLink to='/'>Главная</NavLink>
      </Home>
      <RenderPropsMenu genres={movies} type={'movie'} title={'Фильмы'}/>
      <RenderPropsMenu genres={tv} type={'tv'} title={'Сериалы'}/>
    </Wrapped>
  )
}

const mapStateToProps = ({ geral: { movie, tv } }) => {
  return {
    movies: movie.genres,
    tv: tv.genres
  }
}


export default connect(mapStateToProps)(Header);
