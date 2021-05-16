import styled from 'styled-components';
import * as color from '../../../config/colors';
import * as fonts from '../../../config/fonts';
import { respondToDown } from '../../../config/respondTo';

export const ProgressContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  padding-inline: 10%;

  ${respondToDown.sm`
    padding-inline: 5%;
  `}
`;

export const Question = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: ${fonts.md};
  color: ${color.blackText};
  text-align: center;
  margin-top: 30px;
  user-select: none;

  ${respondToDown.sm`
    font-size: ${fonts.normal};
    margin-top: 40px;
  `}
`;

export const AnswerSquareContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 80%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  padding-inline: 15%;

  ${respondToDown.sm`
    padding-inline: 0px;
    margin-top: 20px;
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

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: ${color.white2};
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  width: 35%;
  height: 35%;

  :hover {
    opacity: 0.9;
  }

  ${respondToDown.sm`
    width: 40%;
    height: 35%;
  `}
`;
