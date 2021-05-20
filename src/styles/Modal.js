import styled from 'styled-components';
import * as color from '../config/colors';
import * as fonts from '../config/fonts';
import { respondToDown } from '../config/respondTo';

export const ModalPosition = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 70vw;
  height: 85vh;

  max-width: 930px;
  max-height: 570px;

  overflow: hidden;
  background: ${color.white2};
  border-radius: 20px;
  padding: 20px;
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1.8fr;
  gap: 0px 0px;
  grid-template-areas:
    'Header'
    'Content';

  ${respondToDown.sm`
    width: 90vw;
  `}
`;

export const Header = styled.div`
  grid-area: Header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 25px;

  ${respondToDown.sm`
    padding-inline: 0px;
  `}
`;

export const Title = styled.div`
  color: ${color.colorGreen2};
  font-weight: 700;
  font-size: ${fonts.normal};
  user-select: none;

  ${respondToDown.sm`
    font-size: ${fonts.sm};
  `}
`;

export const Close = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${color.colorGreen2};
  color: ${color.white2};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease 0.3s;

  -webkit-tap-highlight-color: transparent;

  :hover {
    background: ${color.white2};
    color: ${color.colorGreen2};
  }

  ${respondToDown.sm`
    width: 30px;
    height: 30px;
    font-size: ${fonts.sm};
  `}
`;

export const Content = styled.div`
  grid-area: Content;
  overflow: hidden;
`;
