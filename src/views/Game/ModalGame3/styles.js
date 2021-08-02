import styled from 'styled-components';
import * as color from '../../../config/colors';
import * as fonts from '../../../config/fonts';
import { respondToDown } from '../../../config/respondTo';

export const Row = styled.div`
  display: flex;
  height: 100%;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 100%;
  width: 50%;
`;

export const ImgDiv = styled.div`
  background: ${(props) =>
    props.active ? color.colorGreen1 : color.colorGreen2};

  box-shadow: ${(props) =>
    props.active || props.right ? '' : '1px 4px 4px 1px rgba(0, 0, 0, 0.25)'};

  opacity: ${(props) => (props.right ? '0.6' : '1')};

  border-radius: 10px;
  cursor: pointer;

  height: 140px;
  width: auto;

  overflow: hidden;

  ${respondToDown.sm`
    height: 120px;
    width: auto;
  `}
`;

export const Img = styled.img`
  height: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 100%;
  width: 50%;
`;

export const Button = styled.div`
  background: ${(props) =>
    props.active ? color.colorGreen1 : color.colorGreen2};

  box-shadow: ${(props) =>
    props.active || props.right ? '' : '1px 4px 4px 1px rgba(0, 0, 0, 0.25)'};

  opacity: ${(props) => (props.right ? '0.5' : '1')};

  border-radius: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-weight: 700;
  color: ${color.white2};
  -webkit-tap-highlight-color: transparent;

  height: 60px;
  width: 80%;

  :hover {
    opacity: ${(props) => (props.right ? '0.5' : '0.9')};
  }

  ${respondToDown.sm`
    height: 70px;
    width: 90%;
    font-size: ${fonts.sm}
  `}
`;
