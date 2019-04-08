import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getPerson } from '../actions/index';
import queryString from 'query-string';

import Loader from '../components/Loader';
import PersonItem from '../components/PersonItem';
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


        <Section>
          <Title title={"Фильмы с актером"} subtitle={'Фильмы'} />

          <Movies movies={person} />
        </Section>
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
