import React from 'react';
import styled from 'styled-components';

import '../css/modal.css';

import info from '../icons/play-button.svg';
import close from '../icons/close.svg';

import Button from './Button';
import Rating from './Rating';
import Info from './Info';

const Wrapped = styled.div`
  margin-top: 10px;
  max-width: 185px;
`;

const Img = styled.img`
  height: 50px;
  width: 50px;
`;

const RatingInfo = styled.div``;

const RatingsWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const RatingNumber = styled.div`
  font-size: 12px;
  margin-left: 10px;
  position: relative;
  top: -1px;
`;

const SubTitle = styled.div`
  font-size: 22px;
  color: black;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 18px;
  }
  @media ${props => props.theme.mediaQueries.minMobile} {
    font-size: 14px;
  }
`;

const Subdescr = styled.div`
  margin-left: 10px;

  @media ${props => props.theme.mediaQueries.small} {
    font-size: 12px;
  }
`;

const Title = styled.h1`
  @media ${props => props.theme.mediaQueries.small} {
    font-size: 20px;
  }
  @media ${props => props.theme.mediaQueries.minMobile} {
    font-size: 16px;
  }
`;

const Link = styled.a``;
const Popup = styled.div``;
const PopupInner = styled.div``;
const PopupPhoto = styled.div``;
const PopupText = styled.div``;

const Modal = ({ infoEpisode, baseUrl }) => {

  const { 
    still_path, 
    name, 
    episode_number, 
    season_number, 
    air_date, 
    vote_average, 
    overview 
  } = infoEpisode;

  return (
    <Wrapped>
      <Link href="#popup">
        <Button title={'Прошлая серия'} icon={info}/>
      </Link>
      <Popup className="popup" id="popup">
        <PopupInner className="popup-inner">
          <PopupPhoto className="popup__photo">
            { renderImage(baseUrl, still_path) }
          </PopupPhoto>
          <PopupText className="popup__text">
            <Title>{name}</Title>
            <Info title={`Номер эпизода/сезон/дата выхода:`} descr={`${episode_number}/${season_number}/${air_date}`}/>
            { renderRating(vote_average)}
            <Info title={`Описание:`} descr={overview}/>
           
          </PopupText>
          <Link className="popup__close" href='#'>
            <Img src={close} alt="close" />
          </Link>
        </PopupInner>
      </Popup>
    </Wrapped>
  )
}

const renderImage = (baseUrl, src) => {
  return (
    src ? 
      <img src={`${baseUrl}original${src}`} alt="img" /> 
    : 
      <img src="https://images.unsplash.com/photo-1477132394330-d2376dc4c091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1472&q=80" alt="none"/>
  )
}

const renderRating = (rating) => {
  return (
      rating === 0 ? 
      null 
    :
      <RatingInfo>
        <SubTitle>Рейтинг:</SubTitle>
        <Subdescr>
          <RatingsWrapper>
            <Rating 
              number={rating}/>
            <RatingNumber>
              { rating.toFixed(1) }
            </RatingNumber>
          </RatingsWrapper>
        </Subdescr>
      </RatingInfo>
  )
}

export default Modal
