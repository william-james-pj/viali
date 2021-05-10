import React from 'react';

import Gallery from '../../components/Gallery/index';
import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/mind-maps.svg';

import { Container, Text, GalleryContainer } from './styles';

import ImgPath2 from '../../assets/img/virus.png';

const items = [
  {
    imgUrl: ImgPath2,
    title: 'Vírus e Virose',
  },
];

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
        <Gallery horizontal items={items} />
      </GalleryContainer>
    </Container>
  );
}

export default MentalMap;
