import React from 'react';
import styled from 'styled-components';

const Wrapped = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-top: 40px;
`;

const Img = styled.div`
  margin-right: 40px;
`;

const Image = styled.img`
  border-radius: 15px;
  box-shadow: 0 2px 25px 10px rgba(48,63,159, .2);
  width: 400px;
`;
const Description = styled.div`
  color: #616161;
  margin-top: 20px;
`;
const Content = styled.div`
  display: flex;
  margin-top: 60px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 40px;
`;

const Info = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
`;

const Year = styled.div`
  margin-right: 4px;
`;
const Countries = styled.div``;
const Genres = styled.div``;
const InfoProd = styled.div`
  display: flex;
`;

const MovieDescription = ({ movie: { 
  title,
  poster_path,
  overview,
  vote_average,
  homepage,
  release_date,
  budget,
  original_title,
  production_countries,
  genres,
  baseUrl
 }} ) => {
  return (
    <Wrapped>
      <Title>{title} ({original_title})</Title>
      <Content>
        <Img>
          <Image src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="poster"/>
        </Img>
        <Description>
          <Info>
            <InfoProd>  
              <Year>
                {release_date.split('-')[0]} год  
              </Year>
              <Countries>
                { countries(production_countries) } 
              </Countries>
            </InfoProd>
            <Genres>
              { getGenres(genres) }
            </Genres>
          </Info>
          <div>{overview}</div>
          <div>Рейтинг {vote_average}</div>
          <div>Страница фильма {homepage} </div>
          <div>Бюджет {budget}</div>
        </Description>
      </Content>
    </Wrapped>
  )
}

const countries = items => {
  return items.map(item => item.iso_3166_1 + ' ')
}

const getGenres = items => {
  return items.map(item => item.name + ' ')
}

export default MovieDescription
