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
              <Redirect to="/discover/Popular"/>
            )} exact/>

            <Route path="/discover/:name" component={Discover}/>

            <Route path="/genre/:name" component={Genre}/>

            <Redirect to="/discover/Popular"/>
          </Switch>

        </Wrapped>
      </Router>
    )
}

const mapStateToProps = ({ geral }) => {
  return { isLoading: geral.loading }
}

export default connect(mapStateToProps, { init })(App)
