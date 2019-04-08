import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMovie } from '../actions/index';
import queryString from 'query-string';

import Loader from '../components/Loader';
import MovieItem from '../components/MovieItem';
import Movies from '../components/Movies';
import Title from '../components/Title';

const LoaderWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 47.5%;
`;

const Section = styled.section`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;


const MovieDetails = ({ match, getMovie, movie, loading, geral, location }) => {

  const params = queryString.parse(location.search)

  useEffect(() => {
    getMovie(match.params.id, params.page)
  }, [match.params.id, params.page])

  const { secure_base_url } = geral.base.images;

  return loading ? 
      <LoaderWrapper>
        <Loader/>
      </LoaderWrapper> 
    : 
      <Fragment>
        <MovieItem movie={movie} baseUrl={secure_base_url}/>
        
        <Section>
          <Title title={"Рекомендации"} subtitle={'Фильмы'} />

          <Movies movies={movie} />
        </Section>
      </Fragment>
}

const mapStateToProps = ({ movie, geral }) => {
  return {
    movie,
    loading: movie.loading,
    geral
  }
}

export default connect(mapStateToProps, { getMovie })(MovieDetails)
