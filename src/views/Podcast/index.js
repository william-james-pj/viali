import React from 'react';

import Gallery from '../../components/Gallery/index';
import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/podcast.svg';

import { Container, Text, GalleryContainer } from './styles';

import ImgPath2 from '../../assets/img/virus.png';

const items = [
  {
    imgUrl: ImgPath2,
    title: 'Vírus e Virose',
  },
];

function Podcast() {
  return (
    <Container>
      <MyHeader
        title={'Olá seja bem-vindo ao'}
        text={'Podcast'}
        imgPath={ImgPath}
      />
      <Text>Originais ViALi</Text>
      <GalleryContainer>
        <Gallery items={items} />
      </GalleryContainer>
    </Container>
  );
}

export default Podcast;
