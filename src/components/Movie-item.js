import React from 'react';
import styled from 'styled-components';

import './movie.css';

const Img = styled.img``;
const CardBody = styled.div``;
const CardName = styled.h3``;
const CardBio = styled.p``;
const CardFooter = styled.div``;
const CardDate = styled.div``;
const CardImage = styled.figure``;
const Card = styled.div``;
const Wrapped = styled.div``;

const MovieItem = ({ movies: { poster_path, overview, original_title } }) => {
  return (
    <Wrapped className="hover-wrapped">
      <Card className="card" data-effect="zoom">
        <CardImage className="card__image">
          <Img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="short"/>
        </CardImage>

        <CardBody className="card__body">
          <CardBio className="card__bio">{overview}</CardBio>
        </CardBody>

        <CardFooter className="card__footer">
          <CardDate className="card__date"></CardDate>
        </CardFooter>
      </Card>
      <CardName className="card__name">{original_title}</CardName>
    </Wrapped>
    )
}

export default MovieItem