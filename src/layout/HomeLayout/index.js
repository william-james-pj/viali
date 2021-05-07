import React, { useState } from 'react';
import Routes from '../../routes/index';

import BarLeft from '../../components/BarLeft/index';
import BarTop from '../../components/BarTop/index';

import {
  Container,
  BarLeftContainer,
  BarTopContainer,
  Content,
} from './styles';

function HomeLayout() {
  const [menuActive, setMenuActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState([0, 0, 0]);

  function menuClick() {
    if (menuActive === 1) {
      setMenuActive(0);
      setMenuOpen([0, 0, 0]);
    } else {
      setMenuActive(1);
      setMenuOpen([1, 2, 3]);
    }
  }

  return (
    <Container>
      <BarLeftContainer active={menuActive}>
        <BarLeft menuClick={menuClick} />
      </BarLeftContainer>
      <BarTopContainer>
        <BarTop menuOpen={menuOpen} menuClick={menuClick} />
      </BarTopContainer>
      <Content>
        <Routes />
      </Content>
    </Container>
  );
}

export default HomeLayout;
