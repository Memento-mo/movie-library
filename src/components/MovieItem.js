import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Rating from './Rating';
import SliderSlick from './SliderSlick';
import ModalVideo from 'react-modal-video';
import Button from './Button';

import '../../node_modules/react-modal-video/scss/modal-video.scss';

const Wrapped = styled.div`
  width: 1100px;
  margin: 40px auto 80px auto;
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

const InfoHeader = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Year = styled.div`
  margin-right: 4px;
`;
const Countries = styled.div``;

const SubTitle = styled.div`
  font-size: 22px;
  color: black;
`;

const RatingsWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const RatingInfo = styled.div`
  margin-bottom: 8px;
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

const SliderWrapper = styled.div`
  width: 700px;
  margin-bottom: 20px;
`;

const InfoMovie = styled.div`
  margin-top: 10px;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 5px;
`;

const WrappedLink = styled.a`
  display: block;
  margin-left: 10px;
`;

const MovieItem = ({ baseUrl, movie }) => {

  const [isOpen, setOpen] = useState(false)

  const genres = getGenres(movie.genres);

console.log(movie)
  return (
    <Wrapped>
      <Title>{movie.title} ({movie.original_title})</Title>
      <Content>
        <Img>
          <Image src={`${baseUrl}w500${movie.poster_path}`} alt="poster"/>
        </Img>

        <Description>
          <InfoHeader>
              <Countries>
                { countries(movie.production_countries) } 
              </Countries>

              <Year>
                { countries(movie.spoken_languages) } / {movie.runtime} мин / {years(movie.release_date)} 
              </Year>
          </InfoHeader>

          <RatingInfo>
            <SubTitle>Рейтинг:</SubTitle>
            <Subdescr>
              <RatingsWrapper>
                <Rating 
                  number={movie.vote_average}/>
                <RatingNumber>
                  { movie.vote_average }
                </RatingNumber>
              </RatingsWrapper>
            </Subdescr>
          </RatingInfo>

          <Info subTitle={"Бюджет:"} subDescr={`${movie.budget}$`}/>

          <Info subTitle={"Жанры:"} subDescr={genres}/>
          
          <Info subTitle={"Описание:"} subDescr={`${movie.overview}`}/>

          <SliderWrapper>
            <Info subTitle={"Актеры:"}/>
            <SliderSlick cast={movie.cast} baseUrl={baseUrl}/>
          </SliderWrapper>

          <Buttons>
            { renderVideo(movie.videos.results, isOpen, setOpen) }
            <WrappedLink target="_blank" rel="noopener noreferrer" href={movie.homepage} >
              <Button title="Сайт фильма" />
            </WrappedLink>
          </Buttons>
        </Description>
      </Content>
    
    </Wrapped>
  )
}

const renderVideo = (videos, isOpen, setOpen) => {
  if(videos.length === 0) {
    return;
  }
  const { key } = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube')

  return (
    <React.Fragment>
      <div onClick={() => setOpen(true)}>
        <Button title="Трейлер" icon="play" />
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={key}
        onClose={() => setOpen(false)}
      />
  </React.Fragment>
  )
}

const Info = ({ subTitle, subDescr }) => {
  
  return !subDescr ? 
        <InfoMovie>
          <SubTitle>{subTitle}</SubTitle>
        </InfoMovie> 
      :
        <InfoMovie>
          <SubTitle>{subTitle}</SubTitle>
          <Subdescr>{subDescr}</Subdescr>
        </InfoMovie>
    
}


const countries = items => {
  return items.map(item => item.name + ' ')
}

const getGenres = items => {
  return items.map(item => 
    <Link 
      to={`${process.env.PUBLIC_URL}/genre/${item.name}`}
      key={item.id}>
        {item.name + ' '}
    </Link>
  )
}

const years = year => {
  return year.split('-')[0]
}



export default MovieItem
