import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const WrappedSection = styled.div`
  height: 70px;
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopSection = () => {
  return (
    <WrappedSection>
      <Container>

        <Header />
        
        <SearchBar />
      </Container>
    </WrappedSection>
  )
}

export default TopSection;
