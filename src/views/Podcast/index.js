import React from 'react';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/podcast.svg';

import { Container } from './styles';

function Podcast() {
  return (
    <Container>
      <MyHeader
        title={'Olá seja bem-vindo ao'}
        text={'Podcast'}
        imgPath={ImgPath}
      />
    </Container>
  );
}

export default Podcast;
