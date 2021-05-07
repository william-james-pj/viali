import styled from 'styled-components';
import * as color from '../../config/colors';
// import * as fonts from '../../config/fonts';
import { respondToUp } from '../../config/respondTo';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Hamburge = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const SpanContainer = styled.div`
  cursor: pointer;
  opacity: 0.8;
  z-index: 99;

  :hover {
    opacity: 1;
  }

  display: block;

  ${respondToUp.md`
    display: none;
  `}

  -webkit-tap-highlight-color: transparent;
`;

export const Span = styled.span`
  display: block;
  width: 26px;
  height: 2px;
  background-color: ${(props) =>
    props.active ? color.primaryColor : color.secondColor};
  transition: all 300ms ease-in-out;
  transform-origin: 3px 1px;
  margin-bottom: 5px;

  transform: ${(props) =>
    props.active === 1
      ? 'rotate(45deg)'
      : props.active === 3
      ? 'rotate(-45deg)'
      : ''};
  opacity: ${(props) => (props.active === 2 ? 0 : 1)};

  -webkit-tap-highlight-color: transparent;
`;
