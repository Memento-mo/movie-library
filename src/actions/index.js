import moviedb from '../api/movie-db';
import * as TYPES from './types';

export const init = () => async dispatch => {
  dispatch({ type: TYPES.START_LOADER });
  await dispatch(getConfig());
  await dispatch(getGenres());
  dispatch({ type: TYPES.FINISH_LOADER });
}

export const getConfig = () => async dispatch => {
  const res = await moviedb.get('/configuration');
  dispatch({
    type: TYPES.GET_CONFIG,
    payload: res.data
  })
}

export const getGenres = () => async dispatch => {
  const movie = await moviedb.get('/genre/movie/list');
  const tv = await moviedb.get('/genre/tv/list');
  dispatch({
    type: TYPES.GET_GENRES,
    movie: movie.data,
    tv: tv.data
  });
}