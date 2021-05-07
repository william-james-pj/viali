import styled from 'styled-components';
import * as color from '../../config/colors';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'Menu';

  background: ${color.secondColor};
  font-size: ${fonts.lg};

  ${respondToDown.md`
    grid-template-rows: 1fr;
  `}
`;

export const Menu = styled.div`
  grid-area: Menu;
  align-self: center;
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 20px;

  -webkit-tap-highlight-color: transparent;

  color: ${(props) => (props.active ? color.secondColor : color.primaryColor)};
  background: ${(props) =>
    props.active ? color.primaryColor : color.secondColor};
  box-shadow: ${(props) =>
    props.active ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : ''};
`;
