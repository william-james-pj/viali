import React from 'react';

import Gallery from '../../components/Gallery/index';
import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/play-game.svg';

import { Container, Text, GalleryContainer } from './styles';

import ImgPath2 from '../../assets/img/virus.png';

const items = [
  {
    imgUrl: ImgPath2,
    title: 'De quem é o híbrido?',
  },
  {
    imgUrl: ImgPath2,
    title: 'Baralho dos seres vivos',
  },
];

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
        <Gallery horizontal items={items} />
      </GalleryContainer>
    </Container>
  );
}

export default Game;
