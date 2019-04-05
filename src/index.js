import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'

import store from './store/store';
import theme from './utils/theme';
import GlobalStyles from './utils/globals';

import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <App/>
        <GlobalStyles />
      </Fragment>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
)