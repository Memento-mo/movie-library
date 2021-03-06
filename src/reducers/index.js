import { combineReducers } from 'redux';

import configReducer from './configReducer';
import moviesReducer from './moviesReducer';
import movieReducer from './movieReducer';
import personReducer from './personReducer';
import searchReducer from './searchReducer';
import tvReducer from './tvReducer';

export default combineReducers({
  geral: configReducer,
  movies: moviesReducer,
  movie: movieReducer,
  person: personReducer,
  search: searchReducer,
  tv: tvReducer
});