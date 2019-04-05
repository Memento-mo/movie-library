import React, { useEffect } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMovies } from '../actions/index';
import queryString from 'query-string';

import Title from '../components/Title';
import Movies from '../components/Movies';
import Loader from '../components/Loader';

const Wrapped = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 47.5%;
`;

const Discover = ({ match, getMovies, movies, loading, location }) => {

  const params = queryString.parse(location.search)

  useEffect(() => {
    console.log('update Discover')
    getMovies(match.params.name, params.page)
  }, [params.page])

  if(loading) {
    return <LoaderWrapper><Loader /></LoaderWrapper>
  }
  return (
    <Wrapped>
      <Title title={match.params.name} subtitle={'Фильмы'} />

      <Movies movies={movies} />
    </Wrapped>
  )
}

const mapStateToProps = ({ movies }) => {
  return {
    movies,
    loading: movies.loading
  }
}

export default connect(mapStateToProps, { getMovies })(Discover)
