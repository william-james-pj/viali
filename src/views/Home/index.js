import React from 'react';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/welcome.svg';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <MyHeader
        title={'Olá seja bem-vindo ao'}
        text={'ViALi'}
        imgPath={ImgPath}
      />
    </Container>
  );
}

export default Home;
