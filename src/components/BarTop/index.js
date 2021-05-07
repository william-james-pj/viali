import React, { useState } from 'react';

import { Container, Hamburge, SpanContainer, Span } from './styles';

function BarLeft(props) {
  const [menuActive, setMenuActive] = useState([0, 0, 0]);

  // eslint-disable-next-line react/prop-types
  props.callbackFromParent(menuActive);

  function menuClick() {
    if (menuActive[0] === 1) setMenuActive([0, 0, 0]);
    else setMenuActive([1, 2, 3]);
  }

  return (
    <Container>
      <Hamburge>
        <SpanContainer onClick={() => menuClick()}>
          <Span active={menuActive[0]}></Span>
          <Span active={menuActive[1]}></Span>
          <Span active={menuActive[2]} style={{ marginBottom: 0 }}></Span>
        </SpanContainer>
      </Hamburge>
    </Container>
  );
}

export default BarLeft;
