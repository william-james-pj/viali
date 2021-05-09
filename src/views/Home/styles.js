import styled from 'styled-components';
import * as color from '../../config/colors';
import * as fonts from '../../config/fonts';
import { respondToDown } from '../../config/respondTo';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 30px;
  overflow: hidden;

  position: relative;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 30px;

  ${respondToDown.md`
    justify-content: center;
    text-align: center;
  `}
`;

export const Text = styled.div`
  color: ${color.blackText};
  font-size: ${fonts.normal};
  line-height: 1.8;
  width: 220px;

  ${respondToDown.md`
    width: 80%;
  `}
`;

export const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;

  position: absolute;
  bottom: -100px;
  right: -100px;

  background: ${color.colorGreen2};
`;
