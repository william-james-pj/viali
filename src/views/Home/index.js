import React from 'react';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/welcome.svg';

import { Container, Text, TextContainer } from './styles';

function Home() {
  return (
    <Container>
      <MyHeader
        title={'Olá seja bem-vindo ao'}
        text={'ViALi'}
        imgPath={ImgPath}
      />
      <TextContainer>
        <Text>
          {`ViALi é um site onde você irá\n
        encontar Jogos, Podcasts e 
        Mapas Mentais sobre alguns 
        temas biológios!`}
        </Text>
      </TextContainer>
    </Container>
  );
}

export default Home;
