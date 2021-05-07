import React from 'react';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/team.svg';

import { Container } from './styles';

function About() {
  return (
    <Container>
      <MyHeader title={'Conheça nosso'} text={'Time'} imgPath={ImgPath} />
    </Container>
  );
}

export default About;
