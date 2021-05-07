/* eslint-disable react/prop-types */
import React from 'react';

import { Container, Hamburge, SpanContainer, Span } from './styles';

function BarLeft(props) {
  return (
    <Container>
      <Hamburge>
        <SpanContainer onClick={() => props.menuClick()}>
          <Span active={props.menuOpen[0]}></Span>
          <Span active={props.menuOpen[1]}></Span>
          <Span active={props.menuOpen[2]} style={{ marginBottom: 0 }}></Span>
        </SpanContainer>
      </Hamburge>
    </Container>
  );
}

export default BarLeft;
