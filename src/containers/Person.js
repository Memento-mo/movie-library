import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getPerson } from '../actions/index';
import queryString from 'query-string';

import Loader from '../components/Loader';
import PersonItem from '../components/PersonItem';
import Movies from '../components/Movies';

const LoaderWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 47.5%;
`;

const MoviesContainer = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
  font-size: 40px;
`;

const Person = ({ match, loading, person, getPerson, geral, location }) => {
  const params = queryString.parse(location.search)

  useEffect(() => {
    getPerson(match.params.id, params.page)
  }, [match.params.id, params.page])

  const { secure_base_url } = geral.base.images;

  return loading ? 
      <LoaderWrapper>
        <Loader/>
      </LoaderWrapper> 
    : 
      <Fragment>
        <PersonItem person={person} baseUrl={ secure_base_url }/>

        <Title>Фильмы с актёром</Title>
        <MoviesContainer>
          <Movies movies={person} />
        </MoviesContainer>
      </Fragment>
}

const mapStateToProps = ({ person, geral }) => {
  return {
    loading: person.loading,
    person,
    geral
  }
}

export default connect(mapStateToProps, { getPerson })(Person);
