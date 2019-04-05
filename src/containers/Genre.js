import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getMovies } from '../actions/index';
import { connect } from 'react-redux';
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

const Genre = ({ match, getMovies, movies, loading }) => {
  useEffect(() => {
    console.log('update Genre')
    getMovies(match.params.name, 1)
  }, [match.params.name])

  if(loading) {
    return <LoaderWrapper><Loader /></LoaderWrapper>
  }

  return (
    <Wrapped>
      <Title title={match.params.name} subtitle={'Фильмы'}/>

      <Movies movies={movies}/>
    </Wrapped>
  )
}

const mapStateToProps = ({geral, movies}) => {
  return { 
    geral, 
    movies: movies.movies,
    loading: movies.loading
  };
};

export default connect(
  mapStateToProps,
  { getMovies }
)(Genre);