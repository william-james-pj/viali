import React from 'react';
// import Routes from '../../routes/index';

import Home from '../../views/Home/index';

import {
  Container,
  BarLeftContainer,
  BarTopContainer,
  Content,
} from './styles';

function HomeLayout() {
  return (
    <Container>
      <BarLeftContainer></BarLeftContainer>
      <BarTopContainer></BarTopContainer>
      <Content>
        <Home />
      </Content>
    </Container>
  );
}

export default HomeLayout;
