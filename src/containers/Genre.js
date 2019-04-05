import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getMovies, clearMovies } from '../actions/index';
import { connect } from 'react-redux';
import queryString from 'query-string';

import Loader from '../components/Loader';
import Title from '../components/Title';
import Movies from '../components/Movies';

const Wrapped = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 47.5%;
`;

const Genre = ({ match, getMovies, movies, loading, location, clearMovies }) => {

  const params = queryString.parse(location.search)
  
  useEffect(() => {
    console.log('update Genre')

    updateMovies(match.params.name, params.page, clearMovies, getMovies)
    
  }, [match.params.name, params.page])

  if(loading) {
    return <LoaderWrapper><Loader/></LoaderWrapper>
  }

  return (
    <Wrapped>
      <Title title={match.params.name} subtitle={'Фильмы'}/>

      <Movies movies={movies} />
    </Wrapped>
  )
}

const updateMovies = (name, page, clearMovies, getMovies) => {
  getMovies(name, page)
  return () => clearMovies()
}

const mapStateToProps = ({geral, movies}) => {
  return { 
    geral, 
    movies,
    loading: movies.loading
  };
};

export default connect(
  mapStateToProps,
  { getMovies, clearMovies }
)(Genre);