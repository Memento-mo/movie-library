import React, { useEffect } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { 
  Router,
  Switch, 
  Route, 
  Redirect } from 'react-router-dom';
import { init } from '../actions/index';
import history from '../history';

import TopSection from './TopSection';
import Loader from '../components/Loader';

import Discover from './Discover';
import Genre from './Genre';
import MovieDetails from './Movie-details';

const Wrapped = styled.div``;

const LoaderWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;

const App = ({ init, isLoading }) => {
  useEffect(() => {
    init()
  }, [])
  return isLoading ? 
    (
      <LoaderWrapper>
        <Loader/>
      </LoaderWrapper>
    ) : (
      <Router history={history}>
        <Wrapped>
          <TopSection/>

          <Switch>
            <Route path="/" render={() => (
              <Redirect to={`${process.env.PUBLIC_URL}/discover/Popular`}/>
            )} exact/>

            <Route path={`${process.env.PUBLIC_URL}/discover/:name`} component={Discover}/>

            <Route path={`${process.env.PUBLIC_URL}/genre/:name`} component={Genre}/>

            <Route path={`${process.env.PUBLIC_URL}/movie/:id`} component={MovieDetails}/>

            <Redirect to={`${process.env.PUBLIC_URL}/discover/Popular`} />
          </Switch>

        </Wrapped>
      </Router>
    )
}

const mapStateToProps = ({ geral }) => {
  return { isLoading: geral.loading }
}

export default connect(mapStateToProps, { init })(App)
