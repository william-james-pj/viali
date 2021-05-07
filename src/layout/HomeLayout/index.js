import React, { useState } from 'react';
// import Routes from '../../routes/index';

import BarLeft from '../../components/BarLeft/index';
import BarTop from '../../components/BarTop/index';
import Home from '../../views/Home/index';

import {
  Container,
  BarLeftContainer,
  BarTopContainer,
  Content,
} from './styles';

function HomeLayout() {
  const [menuActive, setMenuActive] = useState(0);

  const myCallback = (dataFromChild) => {
    if (dataFromChild[0] === 1) setMenuActive(1);
    else setMenuActive(0);
  };

  return (
    <Container>
      <BarLeftContainer active={menuActive}>
        <BarLeft />
      </BarLeftContainer>
      <BarTopContainer>
        <BarTop callbackFromParent={myCallback} />
      </BarTopContainer>
      <Content>
        <Home />
      </Content>
    </Container>
  );
}

export default HomeLayout;
