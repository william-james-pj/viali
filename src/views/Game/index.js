import React from 'react';

import Gallery from '../../components/Gallery/index';
import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/play-game.svg';

import { Container, Text, GalleryContainer } from './styles';

function Game() {
  return (
    <Container>
      <MyHeader
        title={'Olá seja bem-vindo ao'}
        text={'Jogos'}
        imgPath={ImgPath}
      />
      <Text>Populares</Text>
      <GalleryContainer>
        <Gallery horizontal />
      </GalleryContainer>
    </Container>
  );
}

export default Game;
