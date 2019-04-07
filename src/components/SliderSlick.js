import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

const SliderStyles = styled(Slider)`
  margin-top: 10px;

  .slick-prev:before, .slick-next:before {
    color: rgba(69,90,100,1);
  }
`;

const Img = styled.img`
  border-radius: 5px;
  height: 100px;
  width: auto;
`;

const ImgWrapper = styled.div``;

const SliderSlick = ({ cast, baseUrl }) => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: cast.length > 5 ? 10 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };
  return (
    <SliderStyles {...settings}>

      { 
        cast.map(item => {
          if(!item.profile_path) return null;
          return (
            <NavLink to={`${process.env.PUBLIC_URL}/person/${item.id}`} key={item.id}>
              <ImgWrapper >
                <Img src={`${baseUrl}original${item.profile_path}`} alt={item.character}/>
              </ImgWrapper>
            </NavLink>
          )
        }) 
      }
    </SliderStyles>
  );
}

export default SliderSlick
