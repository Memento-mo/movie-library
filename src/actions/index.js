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
  const res = await moviedb.get('/genre/movie/list');
  dispatch({
    type: TYPES.GET_GENRES,
    payload: res.data,
  });
}

export const getMovies = (genre, page) => async (dispatch, getState) => {

  const { genres } = getState().geral;

  const genreId = genres.filter(el => el.name === genre).map(el => el.id).join('');
  
  dispatch({ type: TYPES.FETCH_MOVIE_LOADING });
  const res = await moviedb.get('/discover/movie', {
    params: {
      sort_by: 'popularity.desc',
      page,
      with_genres: genreId
    }
  })
  await dispatch({
    type: TYPES.FETCH_LOAD_MOVIES,
    payload: res.data
  })
  dispatch({ type: TYPES.FETCH_MOVIE_FINISHED });
}

export const getMovie = (id) => async dispatch => {

  dispatch({ type: TYPES.FETCH_GET_MOVIE_LOADING });

  const res = await moviedb.get(`/movie/${id}`, {
    params: {
      append_to_response: 'videos',
    }
  });

  await dispatch({
    type: TYPES.FETCH_GET_MOVIE,
    payload: res.data
  })

  await dispatch(getCredits())

  dispatch({ type: TYPES.FETCH_GET_MOVIE_FINISHED })
}

export const getCredits = () => async (dispatch, getState) => {
  const { movie } = getState();
  const res = await moviedb.get(`/movie/${movie.id}/credits`);
  dispatch({
    type: TYPES.FETCH_GET_CAST,
    payload: res.data
  })
}

export const getPerson = (id, page) => async (dispatch) => {
  dispatch({ type: TYPES.FETCH_GET_PERSON_LOADING });

  const res = await moviedb.get(`/person/${id}`);
  await dispatch({
    type: TYPES.FETCH_GET_PERSON,
    payload: res.data
  })

  await dispatch(getMoviesWithPerson(id, page))

  dispatch({ type: TYPES.FETCH_GET_PERSON_FINISHED });
}


export const clearMovies = () => {
  return {
    type: TYPES.FETCH_MOVIE_LOADING
  }
}

export const getMoviesWithPerson = (id, page) => async (dispatch) =>{
  const res = await moviedb.get(`/discover/movie`, {
    params: {
      with_cast: id,
      page,
      sort_by: 'popularity.desc',
    }
  })
  dispatch({
    type: TYPES.FETCH_MOVIES_WITH_PERSON,
    payload: res.data
  })
}