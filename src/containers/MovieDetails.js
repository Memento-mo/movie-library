import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMovie, clearRecom } from '../actions/movies';
import queryString from 'query-string';
import { animateScroll as scroll } from 'react-scroll';

import MovieItem from '../components/MovieItem';
import Movies from '../components/Movies';
import Title from '../components/Title';
import LoaderWrapper from './LoaderWrapper';

const Section = styled.section`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;

const MovieDetails = ({ match, getMovie, movie, loading, geral, location }) => {
  const params = queryString.parse(location.search)

  useEffect(() => {
    getMovieDetails(match.params.id, params.page, getMovie)
  }, [match.params.id, params.page])

  const { secure_base_url } = geral.base.images;

  return loading ? 
      <LoaderWrapper />
    : 
      <Fragment>
        <MovieItem movie={movie} baseUrl={secure_base_url}/> 

        <Section>
          <Title title={"Рекомендации"} subtitle={"Фильмы"} />

          <Movies movies={movie} />
        </Section>
      </Fragment>
}

const getMovieDetails = (id, page, getMovie) => {
  scroll.scrollToTop({
    smooth: true,
    delay: 500
  })
  getMovie(id, page)
  return () => clearRecom()
}

const mapStateToProps = ({ movie, geral }) => {
  return {
    movie,
    loading: movie.loading,
    geral
  }
}

export default connect(mapStateToProps, { getMovie })(MovieDetails)
