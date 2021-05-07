import React from 'react';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/play-game.svg';

import { Container } from './styles';

function Game() {
  return (
    <Container>
      <MyHeader
        title={'Olá seja bem-vindo ao'}
        text={'Jogos'}
        imgPath={ImgPath}
      />
    </Container>
  );
}

export default Game;
