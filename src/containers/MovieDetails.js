import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMovie } from '../actions/index';

import Loader from '../components/Loader';
import MovieItem from '../components/MovieItem';

const LoaderWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 47.5%;
`;

const MovieDetails = ({ match, getMovie, movie, loading, geral }) => {
  useEffect(() => {
    getMovie(match.params.id)
  }, [match.params.id])

  const { secure_base_url } = geral.base.images;

  return loading ? 
      <LoaderWrapper>
        <Loader/>
      </LoaderWrapper> 
    : 
      <MovieItem movie={movie} baseUrl={secure_base_url}/>
}

const mapStateToProps = ({ movie, geral }) => {
  return {
    movie,
    loading: movie.loading,
    geral
  }
}

export default connect(mapStateToProps, { getMovie })(MovieDetails)