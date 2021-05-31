import styled from 'styled-components';
import * as color from '../../config/colors';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Container = styled.div`
  width: 100%;
  height: 200px;
  background: ${color.colorGreen2};
  border-radius: 20px;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'TextContainer ImgContainer';

  ${respondToDown.md`
    width: 100%;
    height: 300px;
    grid-template-columns: 1fr;
    grid-template-rows: 1.5fr 0.5fr;
    grid-template-areas: 
     'ImgContainer' 
     'TextContainer';
  `}
`;

export const TextContainer = styled.div`
  grid-area: TextContainer;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  color: ${color.white};
  font-size: ${fonts.lg};

  ${respondToDown.md`
    padding: 0px;
    padding-block: 20px;
    font-size: 22px;
    text-align: center;
  `}
`;

export const Text = styled.div`
  width: 100%;
  color: ${color.white};
  font-weight: 700;
  user-select: none;
`;

export const ImgContainer = styled.div`
  grid-area: ImgContainer;
  position: relative;
  overflow: hidden;
  padding: 10px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  ${respondToDown.md`
    align-items: center;
    justify-content: center;
    padding-top: 10px;
  `}
`;

export const Img = styled.img`
  position: absolute;
  height: 90%;
  width: auto;
`;
