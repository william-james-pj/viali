import styled from 'styled-components';
import * as color from '../../../config/colors';
import * as fonts from '../../../config/fonts';
import { respondToDown } from '../../../config/respondTo';

export const ProgressContainer = styled.div`
  margin-top: 5px;
  width: 100%;
  padding-inline: 10%;

  ${respondToDown.sm`
    padding-inline: 5%;
  `}
`;

export const QuestionContainer = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const QuestionSquare = styled.div`
  background: ${color.white2};
  box-shadow: 1px 4px 4px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;

  width: auto;
  max-width: 160px;
  height: 80%;
  overflow: hidden;
  margin-inline: 20px;

  :hover {
    opacity: 0.9;
  }

  ${respondToDown.sm`
    margin-inline: 10px;
    height: 80%;
    width: 86px;
  `}
`;

export const Question = styled.div`
  font-weight: 700;
  font-size: ${fonts.md};
  color: ${color.blackText};
  user-select: none;

  ${respondToDown.sm`
    font-size: ${fonts.normal};
  `}
`;

export const AnswerSquareContainer = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  padding-inline: 0%;

  ${respondToDown.md`
    padding-inline: 10px;
  `}
`;

export const AnswerSquare = styled.div`
  background: ${color.white2};
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

  width: auto;
  max-width: 160px;
  height: 80%;
  overflow: hidden;

  :hover {
    opacity: 0.9;
  }

  ${respondToDown.sm`
    height: 45%;
    width: 90px;
  `}
`;

export const Img = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`;
