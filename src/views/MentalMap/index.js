import React from 'react';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/mind-maps.svg';

import { Container } from './styles';

function MentalMap() {
  return (
    <Container>
      <MyHeader
        title={'Olá seja bem-vindo ao'}
        text={'Mapa Mental'}
        imgPath={ImgPath}
      />
    </Container>
  );
}

export default MentalMap;
