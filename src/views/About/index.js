import React from 'react';

import MyHeader from '../../components/MyHeader/index';
import ImgPath from '../../assets/img/team.svg';
import TeamUser from '../../components/TeamUser/index';

import { Container, TeamContainer } from './styles';

function About() {
  return (
    <Container>
      <MyHeader title={'Conheça nosso'} text={'Time'} imgPath={ImgPath} />
      <TeamContainer>
        <TeamUser
          name={'name'}
          description={
            'Lorem ipsum sodales elit leo integer platea vel magna, ante curabitur fames habitasse commodo congue.'
          }
        />
        <TeamUser
          name={'name'}
          description={
            'Lorem ipsum sodales elit leo integer platea vel magna, ante curabitur fames habitasse commodo congue.'
          }
        />
        <TeamUser
          name={'name'}
          description={
            'Lorem ipsum sodales elit leo integer platea vel magna, ante curabitur fames habitasse commodo congue.'
          }
        />
      </TeamContainer>
    </Container>
  );
}

export default About;
