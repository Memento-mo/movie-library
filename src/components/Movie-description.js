import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Rating from './Rating';

const Wrapped = styled.div`
  width: 1100px;
  margin: 0 auto;
  margin-top: 40px;
  font-weight: 700;
`;

const Img = styled.div`
  margin-right: 40px;
  height: 550px;
`;

const Image = styled.img`
  border-radius: 15px;
  box-shadow: 0 2px 25px 10px rgba(48,63,159, .2);
  height: 100%;
`;
const Description = styled.div`
  color: rgba(55,71,79,1);
  margin-top: 10px;
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
  margin-bottom: 10px;
`;

const Year = styled.div`
  margin-right: 4px;
`;
const Countries = styled.div``;
const Genres = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  font-size: 22px;
  color: black;
`;

const Overview = styled.div`
  margin-bottom: 10px;
`;

const RatingsWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const RatingInfo = styled.div`
  margin-bottom: 8px;
`;

const Budget = styled.div`
  margin-bottom: 10px;
`;
const Subdescr = styled.div`
  margin-left: 10px;
`;

const RatingNumber = styled.div`
  font-size: 12px;
  margin-left: 10px;
  position: relative;
  top: -1px;
`;

const Link = styled(NavLink)`
  color: rgba(55,71,79,1);
  transition: 0.2s ease;

  &:hover {
    color: rgba(55,71,79, .6);
  }
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
    runtime,
    spoken_languages
  }, 
    baseUrl
  }) => {
  return (
    <Wrapped>
      <Title>{title} ({original_title})</Title>
      <Content>
        <Img>
          <Image src={`${baseUrl}w500${poster_path}`} alt="poster"/>
        </Img>

        <Description>
          <Info>
              <Countries>
                { countries(production_countries) } 
              </Countries>

              <Year>
                { countries(spoken_languages) } / {runtime} мин / {years(release_date)} 
              </Year>
          </Info>

          <RatingInfo>
            <SubTitle>Рейтинг:</SubTitle>
            <Subdescr>
              <RatingsWrapper>
                <Rating 
                  number={vote_average}/>
                <RatingNumber>
                  { vote_average }
                </RatingNumber>
              </RatingsWrapper>
            </Subdescr>
          </RatingInfo>

          <Budget>
            <SubTitle>Бюджет:</SubTitle>
            <Subdescr>{budget}$</Subdescr>
          </Budget>

          <Genres>
            <SubTitle>Жанры:</SubTitle>
            <Subdescr>{ getGenres(genres) }</Subdescr>
          </Genres>

          <Overview>
            <SubTitle>Описание:</SubTitle>
            <Subdescr>{overview}</Subdescr>
          </Overview>
          
          {/* <div>Страница фильма {homepage} </div> */}
        </Description>
      </Content>
    </Wrapped>
  )
}

const countries = items => {
  return items.map(item => item.name + ' ')
}

const getGenres = items => {
  return items.map(item => 
    <Link 
      to={`${process.env.PUBLIC_URL}/genre/${item.name}`}>
        {item.name + ' '}
    </Link>
  )
}

const years = year => {
  return year.split('-')[0]
}

export default MovieDescription
