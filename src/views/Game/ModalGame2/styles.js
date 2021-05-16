import styled from 'styled-components';
import * as color from '../../../config/colors';
import * as fonts from '../../../config/fonts';
import { respondToDown } from '../../../config/respondTo';

export const Question = styled.div`
  width: 100%;
  font-size: ${fonts.md};
  font-weight: 700;
  color: ${color.blackText};
  text-align: center;
  margin-top: 20px;
  padding-inline: 15%;
  user-select: none;

  ${respondToDown.sm`
    font-size: ${fonts.normal};
    margin-top: 10px;
    padding-inline: 5%;
  `}
`;

export const AnswerSquareContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 65%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  padding-inline: 15%;

  ${respondToDown.sm`
    padding-inline: 0px;
    margin-top: 10px;
    height: 70%;
  `}

  ${respondToDown.md`
    padding-inline: 0px;
  `}
`;

export const AnswerSquare = styled.div`
  background: ${(props) =>
    props.active ? color.colorGreen1 : color.colorGreen2};
  box-shadow: ${(props) =>
    props.active ? '' : '1px 4px 4px 1px rgba(0, 0, 0, 0.25)'};
  border-radius: 10px;
  cursor: pointer;

  flex-basis: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: ${color.white2};
  -webkit-tap-highlight-color: transparent;

  height: 50px;

  :hover {
    opacity: 0.9;
  }

  ${respondToDown.sm`
    flex-basis: 30%;
    height: 70px;
    font-size: ${fonts.sm}
  `}
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  user-select: none;

  ${respondToDown.sm`
    margin-top: 10px;
  `}
`;

export const Button = styled.div`
  width: 450px;
  height: 70px;
  background: ${color.colorGreen2};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;

  font-weight: 700;
  color: ${color.white2};
  font-size: ${fonts.md};
  user-select: none;

  ${respondToDown.sm`
    width: 350px;
    height: 50px;
    font-size: ${fonts.sm};
  `}

  :hover {
    opacity: 0.6;
  }
`;
