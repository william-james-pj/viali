import React from 'react';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/podcast.svg';
import Slide from '../../components/Slide/index';

import { Container, Text, SlideContainer, PaddingContainer } from './styles';

function Podcast() {
  return (
    <Container>
      <PaddingContainer>
        <MyHeader
          title={'Olá seja bem-vindo ao'}
          text={'Podcast'}
          imgPath={ImgPath}
        />
      </PaddingContainer>
      <Text>Originais ViALi</Text>
      <SlideContainer>
        <Slide />
      </SlideContainer>
    </Container>
  );
}

export default Podcast;
