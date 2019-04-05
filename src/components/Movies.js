import React from 'react';

import MovieItem from './Movie-item'

const Movies = ({ movies }) => {
  return (
    <section className="movies">
      <div className="movies-container">

        <div className="wrapped"> { movies.map(movie => <MovieItem movies={movie} key={movie.id}/>) } </div>

        {/* <div className="buttons"> { buttons } </div> */}

      </div>
    </section>
  )
}

export default Movies

