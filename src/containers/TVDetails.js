import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { getSeries } from '../actions/tv';
import queryString from 'query-string';
import { animateScroll as scroll } from 'react-scroll';
import { connect } from 'react-redux';

import LoaderWrapper from './LoaderWrapper';
import TVItem from '../components/TVItem';
import Title from '../components/Title';

const Section = styled.section`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;

const TVDetails = ({ match, getSeries, tvDetails, loading, geral }) => {
  useEffect(() => {
    getSeries(match.params.id);
  }, [match.params.id])

  const { secure_base_url } = geral.base.images;

  return loading ?
      <LoaderWrapper />
    :
      <Fragment>
        <TVItem tv={tvDetails} baseUrl={secure_base_url}/>
      </Fragment>
}

const mapStateToProps = ({ tv, geral }) => {
  return {
    tvDetails: tv,
    loading: tv.loading,
    geral
  }
}

export default connect(mapStateToProps, { getSeries })(TVDetails);
