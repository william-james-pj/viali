import React from 'react';

import Gallery from '../../components/Gallery/index';
import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/mind-maps.svg';

import { Container, Text, GalleryContainer } from './styles';

function MentalMap() {
  return (
    <Container>
      <MyHeader
        title={'Olá seja bem-vindo ao'}
        text={'Mapa Mental'}
        imgPath={ImgPath}
      />
      <Text>Em alta</Text>
      <GalleryContainer>
        <Gallery horizontal />
      </GalleryContainer>
    </Container>
  );
}

export default MentalMap;
