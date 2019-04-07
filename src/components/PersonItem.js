import React from 'react';
import styled from 'styled-components';

const Wrapped = styled.div`
  width: 1200px;
  margin: 40px auto 80px auto;
  font-weight: 700;
`;

const Title = styled.div`
  text-align: center;
  font-size: 40px;
`;

const Content = styled.div`
  display: flex;
  margin-top: 60px;
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

const SubTitle = styled.div`
  font-size: 22px;
  color: black;
  line-height: 1.7
`;

const Description = styled.div`
  color: rgba(55,71,79,1);
  margin-top: 10px;
`;

const Subdescr = styled.div`
  font-size: 14px;
  margin-left: 10px;
`;
const InfoPerson = styled.div`
  margin-top: 10px;
`;

const PersonItem = ({ person, baseUrl }) => {
  return (
    <Wrapped>
      <Title>{person.name}</Title>
      <Content>
        <Img>
          <Image src={`${baseUrl}w500${person.profile_path}`} alt="poster"/>
        </Img>

        <Description>

          <Info subTitle="Место рождения" subDescr={person.place_of_birth} />

          <Info subTitle="Возраст" subDescr={person.birthday}/>

          <Info subTitle="Биография" subDescr={person.biography}/>

        </Description>
      </Content>
    </Wrapped>
  )
}

const Info = ({ subTitle, subDescr }) => {
  
  return !subDescr ? 
        null 
      :
        <InfoPerson>
          <SubTitle>{subTitle}</SubTitle>
          <Subdescr>{subDescr}</Subdescr>
        </InfoPerson>
    
}

export default PersonItem
