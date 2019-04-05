import React from 'react';
import styled from 'styled-components';

import MovieItem from './Movie-item';
import Pagination from './Pagination';

const Section = styled.section`
  margin-bottom: 50px;
`;

const MoviesContainer = styled.div`
  width: 84%;
  margin: 0 auto;
`;

const Wrapped = styled.div`
  max-width: 250px;
  width: 100%;
  margin-top: 54px;
  display: grid;
  grid-template-columns: repeat(5, 100%);
  justify-items: center;
  grid-column-gap: 45px;
  grid-row-gap: 30px;
`;

const Movies = ({ movies }) => {
  const result = movies.results
  return (
    <Section>
      <MoviesContainer>

        <Wrapped> 
          { 
            result.map(movie => <MovieItem movies={movie} key={movie.id}/>) 
          } 
        </Wrapped>

        <Pagination movies={movies}/>
      </MoviesContainer>
    </Section>
  )
}

export default Movies

