import styled, { keyframes } from 'styled-components';
// import * as color from '../../config/colors';
import { respondToUp, respondToDown } from '../../config/respondTo';

const menuAnimationOpen = keyframes`
 0% { left: -120px;  }
 100% { left: 0px; }
`;

const menuAnimationClose = keyframes`
 0% { left: 0px;  }
 100% { left: -120px; }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 1.9fr;
  gap: 0px 0px;
  grid-template-areas:
    'barTop'
    'content';
  overflow: hidden;

  ${respondToUp.md`
    grid-template-columns: 0.15fr 1.85fr;
    grid-template-areas:
    'barLeft content'
    'barLeft content';
  `}
`;

export const BarLeftContainer = styled.div`
  grid-area: barLeft;
  box-shadow: 9px 0px 18px -7px rgba(0, 0, 0, 0.25);
  z-index: 98;
  animation-iteration-count: inherit;
  animation-duration: 1s;

  ${respondToDown.md`
    position: absolute;
    left: ${(props) => (props.active ? '0px' : '-120px')};
    bottom: 0;
    height: 100vh;
    width: 100px;
    z-index: 98;
    animation-name: ${(props) =>
      props.active ? menuAnimationOpen : menuAnimationClose};
  `}
`;

export const BarTopContainer = styled.div`
  grid-area: barTop;
  z-index: 3;

  ${respondToDown.md`
     z-index: 99;
  `}

  ${respondToUp.md`
    display: none;
  `}
`;

export const Content = styled.div`
  grid-area: content;
  overflow: hidden;

  ${respondToDown.md`
    overflow: auto;
  `}
`;
