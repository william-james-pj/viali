import styled from 'styled-components';
import * as color from '../../config/colors';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 30px;
  overflow-x: hidden;

  position: relative;
`;

export const TextContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  color: ${color.blackText};
  font-size: ${fonts.normal};
  font-weight: 700;
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  ${respondToDown.md`
    justify-content: center;
    margin-bottom: 30px;
  `};
`;

export const Box = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 10px;
  background: ${color.white};
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);

  position: relative;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'ImgBox'
    'TextBox';

  padding: 10px;
  margin-inline: 20px;

  ${respondToDown.md`
    margin-bottom: 30px;
  `}
`;

export const ImgBox = styled.div`
  grid-area: ImgBox;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const TextBox = styled.div`
  grid-area: TextBox;
  display: flex;
  align-items: center;
  color: ${color.blackText};
  font-size: ${fonts.sm};
  text-align: center;
  user-select: none;
`;

export const Img = styled.img`
  width: auto;
  height: 100%;
`;

export const Override = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.1;
  z-index: 2;
  position: absolute;
  top: 0;
`;
